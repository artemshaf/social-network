import { IsString } from 'class-validator';
import { ITweet } from '@social-network/interfaces';

export namespace AccountUserTweets {
  export const topic = 'account/user.tweets.query';

  export class Request {
    @IsString()
    id: string;
  }

  export class Response {
    tweets: ITweet[];
  }
}
