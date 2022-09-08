import { IsString } from 'class-validator';
import { IMessage } from '@social-network/interfaces';

export namespace ChatMessageUserAdd {
  export const topic = 'chat.message-user-add.command';

  export class Request implements Omit<IMessage, 'date'> {
    @IsString()
    msg: string;
    @IsString()
    sender: string;
    @IsString()
    receiver: string;
  }

  export class Response {}
}
