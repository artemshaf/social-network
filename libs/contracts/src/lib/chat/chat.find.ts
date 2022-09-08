import { IsString } from 'class-validator';
import { IChat, IUserChats } from '@social-network/interfaces';

export namespace ChatFind {
  export const topic = 'chat.create.query';

  export class Request {
    @IsString()
    user: string;
  }

  export class Response implements IChat {
    user: string;
    chats: IUserChats[];
  }
}
