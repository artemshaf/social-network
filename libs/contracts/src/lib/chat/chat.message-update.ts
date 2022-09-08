import { IsString } from 'class-validator';
import { IChat, IUserChats } from '@social-network/interfaces';

export namespace ChatMessageUpdate {
  export const topic = 'chat.message-update.command';

  export class Request {
    @IsString()
    user: string;
  }

  export class Response implements IChat {
    user: string;
    chats: IUserChats[];
  }
}
