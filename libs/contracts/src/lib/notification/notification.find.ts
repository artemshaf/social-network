import { IsString } from 'class-validator';
import { INotification, IUserNotification } from '../../../../interfaces/src';

export namespace NotificationFind {
  export const topic = 'notification.find.command';

  export class Request {
    @IsString()
    user: string;
  }

  export class Response implements IUserNotification {
    user: string;
    notifications: INotification[];
  }
}
