import { IsString } from 'class-validator';
import { IChat, IUserChats } from '@social-network/interfaces';

export namespace ChatMessageChatRemove {
  export const topic = 'chat.message-chat-remove.command';

  export class Request {
    @IsString()
    whoRemoved: string;
    @IsString()
    messagesWith: string;
  }

  export class Response {}
}
