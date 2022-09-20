import { Body, Controller, Post } from '@nestjs/common';
import { RMQService } from 'nestjs-rmq';
import { AccountUserTokenRefresh } from '@social-network/contracts';
import { PublicRoute } from '../../../decorator/public.decorator';

@Controller('token')
export class TokenController {
  constructor(private readonly rmqService: RMQService) {}

  @PublicRoute()
  @Post('/refresh')
  async refresh(
    @Body() data: AccountUserTokenRefresh.Request
  ): Promise<AccountUserTokenRefresh.Response> {
    const tokens = await this.rmqService.send<
      AccountUserTokenRefresh.Request,
      AccountUserTokenRefresh.Response
    >(AccountUserTokenRefresh.topic, data);
    return tokens;
  }
}
