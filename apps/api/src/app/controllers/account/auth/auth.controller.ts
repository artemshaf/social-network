import {
  BadRequestException,
  Body,
  Controller,
  Headers,
  Post,
  UseGuards,
} from '@nestjs/common';
import { RMQService } from 'nestjs-rmq';
import {
  AccountAuthLogin,
  AccountAuthLogout,
  AccountAuthRegister,
  ChatCreate,
  FileCreateUserFile,
  FriendCreate,
  NotificationCreate,
} from '@social-network/contracts';
import { AuthGuard } from '@nestjs/passport';
import { JWTAuthGuard } from '../../../guards/jwt.guard';
import { PublicRoute } from '../../../decorator/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly rmqService: RMQService) {}

  @PublicRoute()
  @Post('register')
  async register(@Body() dto: AccountAuthRegister.Request) {
    try {
      const data = await this.rmqService.send<
        AccountAuthRegister.Request,
        AccountAuthRegister.Response
      >(AccountAuthRegister.topic, dto);
      await this.rmqService.send<ChatCreate.Request, ChatCreate.Response>(
        ChatCreate.topic,
        { user: data.user._id }
      );
      await this.rmqService.send<FriendCreate.Request, FriendCreate.Response>(
        FriendCreate.topic,
        { user: data.user._id }
      );
      await this.rmqService.send<
        NotificationCreate.Request,
        NotificationCreate.Response
      >(NotificationCreate.topic, { user: data.user._id });
      await this.rmqService.send<
        FileCreateUserFile.Request,
        FileCreateUserFile.Response
      >(FileCreateUserFile.topic, { id: data.user._id });
      return data;
    } catch (e) {
      throw new BadRequestException(e ?? '');
    }
  }

  @PublicRoute()
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
  async logout(@Body() data: AccountAuthLogout.Request) {
    try {
      return await this.rmqService.send<
        AccountAuthLogout.Request,
        AccountAuthLogout.Response
      >(AccountAuthLogout.topic, data);
    } catch (e) {
      throw new BadRequestException(e ?? '');
    }
  }
}
