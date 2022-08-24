import { IsString } from 'class-validator';

export namespace AccountUserAddFriendRequest {
  export const topic = 'account/user.add-friend-request.command';

  export class Request {
    @IsString()
    from: string;

    @IsString()
    to: string;
  }

  export class Response {}
}
