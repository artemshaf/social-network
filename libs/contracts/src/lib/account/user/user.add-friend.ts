import { IsString } from 'class-validator';

export namespace AccountUserAddFriend {
  export const topic = 'account/user.add-friend.command';

  export class Request {
    @IsString()
    from: string;

    @IsString()
    to: string;
  }

  export class Response {}
}
