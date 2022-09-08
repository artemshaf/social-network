import { IsArray, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Follower } from 'apps/friends/src/app/model/friends.model';

export namespace FriendFriends {
  export const topic = 'friend.friends.query';

  export class Request {
    @IsString()
    id: string;
  }

  export class Response {
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => Follower)
    followers: Follower[];

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => Follower)
    following: Follower[];
  }
}
