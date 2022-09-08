import { IsArray, IsString, ValidateNested } from 'class-validator';
import { IChat, IUserChats } from '@social-network/interfaces';

export namespace FileFindInfo {
  export const topic = 'file.find-info.query';

  export class Request {
    @IsString()
    id: string;
  }

  export class Response {}
}
