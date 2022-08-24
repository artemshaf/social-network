import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { RMQService } from 'nestjs-rmq';
import {
  AccountAuthLogin,
  AccountAuthRegister,
} from '@social-network/contracts';

@Controller('auth')
export class AuthController {
  constructor(private readonly rmqService: RMQService) {}

  @Post('register')
  async register(@Body() dto: AccountAuthRegister.Request) {
    try {
      return await this.rmqService.send<
        AccountAuthRegister.Request,
        AccountAuthRegister.Response
      >(AccountAuthRegister.topic, dto);
    } catch (e) {
      throw new BadRequestException(e ?? '');
    }
  }

  @Post('login')
  async login(@Body() dto: AccountAuthLogin.Request) {
    try {
      return await this.rmqService.send<
        AccountAuthLogin.Request,
        AccountAuthLogin.Response
      >(AccountAuthLogin.topic, dto);
    } catch (e) {
      throw new BadRequestException(e ?? '');
    }
  }
}
