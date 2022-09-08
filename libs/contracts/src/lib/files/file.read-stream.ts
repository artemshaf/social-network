import { IsOptional, IsString } from 'class-validator';
import { IChat, IUserChats } from '@social-network/interfaces';
import { Express } from 'express';
import { Multer } from 'multer';
import { Document } from 'mongoose';

export namespace FileReadStream {
  export const topic = 'file.read-stream.query';

  export class Request {
    @IsString()
    id: string;
  }

  export class Response {}
}
