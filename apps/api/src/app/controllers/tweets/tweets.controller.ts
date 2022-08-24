import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AccountUserTweets } from '@social-network/contracts';
import { RMQService } from 'nestjs-rmq';
import { JWTAuthGuard } from '../../guards/jwt.guard';

@Controller('tweets')
export class UserTweetsController {
  constructor(private readonly rmqService: RMQService) {}

  @UseGuards(JWTAuthGuard)
  @Get()
  async get(@Body() dto: AccountUserTweets.Request) {
    try {
      return await this.rmqService.send<
        AccountUserTweets.Request,
        AccountUserTweets.Response
      >(AccountUserTweets.topic, dto);
    } catch (e) {
      throw new BadRequestException('');
    }
  }

  @UseGuards(JWTAuthGuard)
  @Post()
  async add(@Body() dto: AccountUserTweets.Request) {
    try {
      return await this.rmqService.send<
        AccountUserTweets.Request,
        AccountUserTweets.Response
      >(AccountUserTweets.topic, dto);
    } catch (e) {
      throw new BadRequestException('');
    }
  }

  @UseGuards(JWTAuthGuard)
  @Delete()
  async delete(@Body() dto: AccountUserTweets.Request) {
    try {
      return await this.rmqService.send<
        AccountUserTweets.Request,
        AccountUserTweets.Response
      >(AccountUserTweets.topic, dto);
    } catch (e) {
      throw new BadRequestException('');
    }
  }
}
