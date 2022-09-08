import { IsString } from 'class-validator';
import { IChat, IUserChats } from '@social-network/interfaces';

export namespace ChatMessageUserRemove {
  export const topic = 'chat.message-user-remove.command';

  export class Request {
    @IsString()
    whoRemoved: string;

    @IsString()
    messageId: string;
  }

  export class Response {}
}
