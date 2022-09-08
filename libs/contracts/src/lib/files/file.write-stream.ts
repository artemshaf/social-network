import { IsOptional, IsString } from 'class-validator';
import { IChat, IUserChats } from '@social-network/interfaces';
import { Express } from 'express';
import { Multer } from 'multer';
import { Document } from 'mongoose';
import { IGridFSWriteOption } from 'mongo-gridfs';
export namespace FileWriteStream {
  export const topic = 'file.write-stream.command';

  export class Request {
    @IsString()
    stream: any;
    @IsOptional()
    options: IGridFSWriteOption;
  }

  export class Response {}
}
