import { Body, Controller } from '@nestjs/common';
import { RMQRoute, RMQValidate } from 'nestjs-rmq';
import { TweetFind } from '@social-network/contracts';
import { TweetRepository } from './repository/tweet.repository';

@Controller()
export class TweetQueries {
  constructor(private readonly tweetRepository: TweetRepository) {}

  @RMQRoute(TweetFind.topic)
  async findByUser(
    @Body() { user }: TweetFind.Request
  ): Promise<TweetFind.Response> {
    return { tweets: await this.tweetRepository.findByUser(user) };
  }
}
