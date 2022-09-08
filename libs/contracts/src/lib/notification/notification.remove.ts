import { IsString } from 'class-validator';

export namespace NotificationRemove {
  export const topic = 'notification.remove.command';

  export class Request {
    @IsString()
    user: string;

    @IsString()
    id: string;
  }

  export class Response {}
}
