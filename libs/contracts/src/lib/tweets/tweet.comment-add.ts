import { IsObject, IsString } from 'class-validator';
import { IComments } from '@social-network/interfaces';

export namespace TweetCommentAdd {
  export const topic = 'tweet.comment-add.command';

  export class Request {
    @IsString()
    id: string;

    @IsObject()
    comment: IComments;
  }

  export class Response {}
}
