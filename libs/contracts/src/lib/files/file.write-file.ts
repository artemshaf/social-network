import { IsArray, IsOptional } from 'class-validator';
import { Express } from 'express';
import { Multer } from 'multer';
import { Document } from 'mongoose';
import { IGridFSWriteOption } from 'mongo-gridfs';

export namespace FileWriteFile {
  export const topic = 'file.write-file.command';

  export class Request {
    @IsArray()
    files: Array<Express.Multer.File>;
    @IsOptional()
    metadata?: Pick<IGridFSWriteOption, 'metadata'>;
  }

  export class Response {}
}
