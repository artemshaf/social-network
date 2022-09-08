import { IsString } from 'class-validator';

export namespace TweetCreate {
  export const topic = 'tweet.create.command';

  export class Request {
    @IsString()
    user: string;
  }

  export class Response {}
}
