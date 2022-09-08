import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { RMQService } from 'nestjs-rmq';
import {
  AccountAuthLogin,
  AccountAuthLogout,
  AccountAuthRegister,
  ChatCreate,
  FriendCreate,
  NotificationCreate,
} from '@social-network/contracts';

@Controller('auth')
export class AuthController {
  constructor(private readonly rmqService: RMQService) {}

  @Post('register')
  async register(@Body() dto: AccountAuthRegister.Request) {
    try {
      const { user } = await this.rmqService.send<
        AccountAuthRegister.Request,
        AccountAuthRegister.Response
      >(AccountAuthRegister.topic, dto);
      await this.rmqService.send<ChatCreate.Request, ChatCreate.Response>(
        ChatCreate.topic,
        { user: user._id }
      );
      await this.rmqService.send<FriendCreate.Request, FriendCreate.Response>(
        FriendCreate.topic,
        { user: user._id }
      );
      await this.rmqService.send<
        NotificationCreate.Request,
        NotificationCreate.Response
      >(NotificationCreate.topic, { user: user._id });
      return user;
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

  @Post('logout')
  async logout(@Body() { id }: AccountAuthLogout.Request) {
    try {
      return await this.rmqService.send<
        AccountAuthLogout.Request,
        AccountAuthLogout.Response
      >(AccountAuthLogout.topic, { id });
    } catch (e) {
      throw new BadRequestException(e ?? '');
    }
  }
}
