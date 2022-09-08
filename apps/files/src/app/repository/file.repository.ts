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
    //   // notice you are calling the multer.diskStorage() method here, not multer()
    //   destination: function (req, file, cb) {
    //     console.log(file);

    //     cb(null, 'uploads/');
    //   },
    //   filename: function (req, file, cb) {
    //     cb(null, file.filename + '-' + Date.now());
    //   },
    // });
    // const upload = multer({ storage }); //provide the return value from
    // upload.array('files');
    const uploadFiles = files.map(async (file) => {
      return await this.fileModel.uploadFile(
        file.path,
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
