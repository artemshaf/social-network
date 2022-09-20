import { Body, Controller, Get, Post } from '@nestjs/common';
import { RMQService } from 'nestjs-rmq';
import { AccountUserGet } from '@social-network/contracts';
import { PublicRoute } from '../../../decorator/public.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly rmqService: RMQService) {}

  @PublicRoute()
  @Post('/feed')
  async findSample(
    @Body() { size }: AccountUserGet.Request
  ): Promise<AccountUserGet.Response> {
    return await this.rmqService.send<
      AccountUserGet.Request,
      AccountUserGet.Response
    >(AccountUserGet.topic, { size });
  }
}
