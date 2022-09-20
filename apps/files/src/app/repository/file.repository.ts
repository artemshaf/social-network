import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Db, GridFSBucket, GridFSFile } from 'mongodb';
import { Connection, Model, Types, Document } from 'mongoose';
import { MongoGridFS, IGridFSWriteOption, IGridFSObject } from 'mongo-gridfs';
import { FileChangeInfo } from 'fs/promises';
import { Express } from 'express';
import { Multer } from 'multer';
import multer = require('multer');
import { IFile } from '@social-network/interfaces';
import { FileWriteFile } from '@social-network/contracts';
import { UserFile } from '../model/userFile.model';

@Injectable()
export class FileRepository {
  private readonly fileModel: MongoGridFS;

  constructor(
    @InjectConnection() private readonly connection: Connection,
    @InjectModel(UserFile.name) private readonly userFileModel: Model<UserFile>
  ) {
    this.fileModel = new MongoGridFS(this.connection.db as Db, 'files');
  }

  async createUserFiles(id: string) {
    return this.userFileModel.create({ id });
  }

  async readStream(id: string) {
    return this.fileModel.readFileStream(id);
  }

  async writeStream(stream, options?: IGridFSWriteOption): Promise<unknown> {
    const writedFile = await this.fileModel.writeFileStream(stream, options);
    console.log(writedFile);

    return writedFile;
  }

  async findInfo(id: string): Promise<IFile> {
    const info = await this.fileModel.findById(id);
    return info;
  }

  async findMusic(): Promise<Array<IFile>> {
    return await this.fileModel.find({ contentType: 'audio/mpeg' });
  }

  async findMusicByUser(ids: Array<string>): Promise<Array<IFile>> {
    return await Promise.all(
      ids.map(async (id) => {
        return await this.findInfo(id);
      })
    );
  }

  async findFilesByUser(ids: Array<string>): Promise<Array<IFile>> {
    return await Promise.all(
      ids.map(async (id) => {
        return await this.findInfo(id);
      })
    );
  }

  async writeFiles(
    files: Array<Express.Multer.File>,
    metadata?: Pick<IGridFSWriteOption, 'metadata'>
  ) {
    const uploadFiles = await Promise.all(
      files.map(async (file) => {
        const fileUpload = await this.fileModel.uploadFile(
          file.path,
          {
            filename: file.originalname,
            contentType: file.mimetype,
            metadata,
          },
          true
        );
        return await fileUpload._id;
      })
    );

    return uploadFiles;
  }

  async readFiles(ids: string[]) {
    const readFiles = ids.map(async (id) => {
      const fileInfo = await this.findInfo(id);
      const file = await this.fileModel.downloadFile(id, {
        targetDir: `tmp/uploads/`,
        filename: fileInfo.filename,
      });
      return file;
    });

    return { readFiles };
  }
}
