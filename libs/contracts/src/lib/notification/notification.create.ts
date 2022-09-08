import { IsString } from 'class-validator';
import { INotification, IUserNotification } from '../../../../interfaces/src';

export namespace NotificationCreate {
  export const topic = 'notification.create.command';

  export class Request {
    @IsString()
    user: string;
  }

  export class Response implements IUserNotification {
    user: string;
    notifications: INotification[];
  }
}
