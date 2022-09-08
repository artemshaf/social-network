import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Db, GridFSBucket, GridFSFile } from 'mongodb';
import { Connection, Model, Types, Document } from 'mongoose';
import { MongoGridFS, IGridFSWriteOption } from 'mongo-gridfs';
import { FileChangeInfo } from 'fs/promises';
import { Express } from 'express';
import { Multer } from 'multer';
import multer = require('multer');

@Injectable()
export class FileRepository {
  private readonly fileModel: MongoGridFS;

  constructor(@InjectConnection() private readonly connection: Connection) {
    this.fileModel = new MongoGridFS(this.connection.db as Db, 'files');
  }

  async readStream(id: string) {
    return this.fileModel.readFileStream(id);
  }

  async writeStream(stream, options?: IGridFSWriteOption): Promise<unknown> {
    const writedFile = await this.fileModel.writeFileStream(stream, options);
    console.log(writedFile);

    return writedFile;
  }

  async findInfo(id: string): Promise<unknown> {
    const info = await this.fileModel.findById(id);

    return info;
  }

  async writeFile(
    files: Array<Express.Multer.File>,
    metadata?: Pick<IGridFSWriteOption, 'metadata'>
  ) {
    // const storage = multer.diskStorage({
    //   destination: (req, file, cb) => {
    //     cb(null, '/uploads');
    //   },
    //   filename: (req, file, cb) => {
    //     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    //     cb(null, file.fieldname + '-' + uniqueSuffix);
    //   },
    // });
    const uploadFiles = files.map(async (file) => {
      await this.writeStream(file);
      return await this.fileModel.uploadFile(
        `C:\\Users\\schaf\\Pictures\\favs\\android-chrome-192x192.png`,
        {
          filename: file.originalname,
          contentType: file.mimetype,
          metadata,
        },
        true
      );
    });

    return {};
  }
}
