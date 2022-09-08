import { IsString } from 'class-validator';
import { IChat, IUserChats } from '@social-network/interfaces';

export namespace ChatMessageDelete {
  export const topic = 'chat.message-delete.command';

  export class Request {
    @IsString()
    user: string;
  }

  export class Response implements IChat {
    user: string;
    chats: IUserChats[];
  }
}
