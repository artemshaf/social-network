import { IsString } from 'class-validator';

export namespace AccountUserDeleteFriend {
  export const topic = 'account/user.delete-friend.command';

  export class Request {
    @IsString()
    from: string;

    @IsString()
    to: string;
  }

  export class Response {}
}
