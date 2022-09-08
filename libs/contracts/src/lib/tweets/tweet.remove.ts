import { IsString } from 'class-validator';

export namespace TweetRemove {
  export const topic = 'tweet.remove.command';

  export class Request {
    @IsString()
    tweetId: string;
  }

  export class Response {}
}
