import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { RMQService } from 'nestjs-rmq';
import {
  TweetCommentAdd,
  TweetCommentDelete,
  TweetFind,
  TweetLike,
  TweetRemove,
} from '@social-network/contracts';

@Controller('tweets')
export class UserTweetsController {
  constructor(private readonly rmqService: RMQService) {}

  // @UseGuards(JWTAuthGuard)
  @Get(':id')
  async get(@Param() dto: TweetFind.Request) {
    try {
      return await this.rmqService.send<TweetFind.Request, TweetFind.Response>(
        TweetFind.topic,
        dto
      );
    } catch (e) {
      throw new BadRequestException('@Controller(tweets)');
    }
  }

  @Post('comment-add')
  async addComment(@Body() dto: TweetCommentAdd.Request) {
    try {
      return await this.rmqService.send<
        TweetCommentAdd.Request,
        TweetCommentAdd.Response
      >(TweetCommentAdd.topic, dto);
    } catch (e) {
      throw new BadRequestException('@Controller(tweets)');
    }
  }

  @Delete('deleteComment')
  async deleteComment(@Body() dto: TweetCommentDelete.Request) {
    try {
      return await this.rmqService.send<
        TweetCommentDelete.Request,
        TweetCommentDelete.Response
      >(TweetCommentDelete.topic, dto);
    } catch (e) {
      throw new BadRequestException('@Controller(tweets)');
    }
  }

  @Post('like')
  async like(@Body() dto: TweetLike.Request) {
    try {
      return await this.rmqService.send<TweetLike.Request, TweetLike.Response>(
        TweetLike.topic,
        dto
      );
    } catch (e) {
      throw new BadRequestException('@Controller(tweets)');
    }
  }

  @Delete()
  async remove(@Body() dto: TweetRemove.Request) {
    try {
      return await this.rmqService.send<
        TweetRemove.Request,
        TweetRemove.Response
      >(TweetRemove.topic, dto);
    } catch (e) {
      throw new BadRequestException('@Controller(tweets)');
    }
  }
}
