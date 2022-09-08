import { IsString } from 'class-validator';

export namespace FriendDelete {
  export const topic = 'friend.delete.command';

  export class Request {
    @IsString()
    from: string;

    @IsString()
    to: string;
  }

  export class Response {}
}
