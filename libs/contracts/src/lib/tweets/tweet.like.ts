import { IsString } from 'class-validator';

export namespace TweetLike {
  export const topic = 'tweet.like.command';

  export class Request {
    @IsString()
    id: string;

    @IsString()
    userWhoLiked: string;
  }

  export class Response {}
}
