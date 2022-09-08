import { IsString } from 'class-validator';
import { IComments } from '@social-network/interfaces';

export namespace TweetCommentDelete {
  export const topic = 'tweet.comment-delete.command';

  export class Request {
    @IsString()
    id: string;

    @IsString()
    commentId: string;
  }

  export class Response {}
}
