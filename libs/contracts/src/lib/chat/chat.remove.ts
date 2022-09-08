import { IsString } from 'class-validator';
import { IChat, IUserChats } from '@social-network/interfaces';

export namespace ChatRemove {
  export const topic = 'chat.remove.command';

  export class Request {
    @IsString()
    user: string;
  }

  export class Response {}
}
