import { IsObject, IsString } from 'class-validator';
import { ITweet } from '@social-network/interfaces';

export namespace TweetUpdate {
  export const topic = 'tweet.update.command';

  export class Request {
    @IsString()
    tweetId: string;
    @IsObject()
    tweet: ITweet;
  }

  export class Response {}
}
