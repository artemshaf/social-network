import { IsObject, IsString } from 'class-validator';
import { INotification } from '@social-network/interfaces';

export namespace NotificationUpdate {
  export const topic = 'notification.update.command';

  export class Request {
    @IsString()
    user: string;

    @IsObject()
    notification: INotification;
  }

  export class Response {}
}
