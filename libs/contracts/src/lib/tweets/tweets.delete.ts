import { IsString } from 'class-validator';

export namespace TweetsDelete {
  export const topic = 'tweets.delete.command';

  export class Request {
    @IsString()
    id: string;
  }

  export class Response {}
}
