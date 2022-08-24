import { IsString } from 'class-validator';

export namespace TweetsAdd {
  export const topic = 'tweets.add.command';

  export class Request {
    @IsString()
    id: string;
  }

  export class Response {}
}
