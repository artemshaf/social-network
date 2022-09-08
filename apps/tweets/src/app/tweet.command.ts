import { Body, Controller } from '@nestjs/common';
import { RMQRoute, RMQValidate } from 'nestjs-rmq';
import {
  TweetCommentAdd,
  TweetCommentDelete,
  TweetCreate,
  TweetLike,
  TweetRemove,
} from '@social-network/contracts';
import { TweetRepository } from './repository/tweet.repository';

@Controller()
export class TweetCommands {
  constructor(private readonly tweetRepository: TweetRepository) {}

  @RMQValidate()
  @RMQRoute(TweetCreate.topic)
  async create(
    @Body() { user }: TweetCreate.Request
  ): Promise<TweetCreate.Response> {
    return this.tweetRepository.create(user);
  }

  @RMQValidate()
  @RMQRoute(TweetCommentAdd.topic)
  async addComment(
    @Body() { comment, id }: TweetCommentAdd.Request
  ): Promise<TweetCommentAdd.Response> {
    return this.tweetRepository.addComment(id, comment);
  }

  @RMQValidate()
  @RMQRoute(TweetCommentDelete.topic)
  async deleteComment(
    @Body() { commentId, id }: TweetCommentDelete.Request
  ): Promise<TweetCommentDelete.Response> {
    return this.tweetRepository.deleteComment(id, commentId);
  }

  @RMQValidate()
  @RMQRoute(TweetLike.topic)
  async like(
    @Body() { id, userWhoLiked }: TweetLike.Request
  ): Promise<TweetLike.Response> {
    return this.tweetRepository.like(id, userWhoLiked);
  }

  @RMQValidate()
  @RMQRoute(TweetRemove.topic)
  async remove(
    @Body() { tweetId }: TweetRemove.Request
  ): Promise<TweetRemove.Response> {
    return this.tweetRepository.remove(tweetId);
  }
}
