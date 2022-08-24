import { IsString } from 'class-validator';
import { IFriend } from '@social-network/interfaces';

export namespace AccountUserGetFriends {
  export const topic = 'account/user.get-friends.query';

  export class Request {
    @IsString()
    id: string;
  }

  export class Response {
    friends: IFriend[];
  }
}
