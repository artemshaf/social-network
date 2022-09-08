import { IsString } from 'class-validator';
import { IChat, IUserChats } from '@social-network/interfaces';

export namespace ChatMessageChatAdd {
  export const topic = 'chat.message-chat-add.command';

  export class Request {
    @IsString()
    receiver: string;
    @IsString()
    sender: string;
  }

  export class Response {}
}
