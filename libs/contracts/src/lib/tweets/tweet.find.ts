import { IsString } from 'class-validator';
import { IComments, ITweet } from '@social-network/interfaces';

export namespace TweetFind {
  export const topic = 'tweet.find.command';

  export class Request {
    @IsString()
    user: string;
  }

  export class Response {
    tweets: ITweet[];
  }
}
