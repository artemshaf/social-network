import { IsString } from 'class-validator';
import { IFollowers, IFriend } from '@social-network/interfaces';

export namespace FriendCreate {
  export const topic = 'friend.create.command';

  export class Request {
    @IsString()
    user: string;
  }

  export class Response implements IFriend {
    user: string;
    followers: IFollowers[];
    following: IFollowers[];
  }
}
