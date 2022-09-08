import { IsString } from 'class-validator';

export namespace FriendAdd {
  export const topic = 'friend.add.command';

  export class Request {
    @IsString()
    from: string;

    @IsString()
    to: string;
  }

  export class Response {}
}
