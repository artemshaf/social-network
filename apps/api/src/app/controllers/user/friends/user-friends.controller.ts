import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  AccountUserAddFriend,
  AccountUserAddFriendRequest,
  AccountUserDeleteFriend,
  AccountUserGetFriends,
} from '@social-network/contracts';
import { RMQService } from 'nestjs-rmq';
import { JWTAuthGuard } from '../../../guards/jwt.guard';

@Controller('user/friends')
export class UserFriendController {
  constructor(private readonly rmqService: RMQService) {}

  @UseGuards(JWTAuthGuard)
  @Get()
  async get(@Body() dto: AccountUserGetFriends.Request) {
    try {
      return await this.rmqService.send<
        AccountUserGetFriends.Request,
        AccountUserGetFriends.Response
      >(AccountUserGetFriends.topic, dto);
    } catch (e) {
      throw new BadRequestException(e ?? '');
    }
  }

  @UseGuards(JWTAuthGuard)
  @Post('add')
  async addFriend(@Body() dto: AccountUserAddFriend.Request) {
    try {
      return await this.rmqService.send<
        AccountUserAddFriend.Request,
        AccountUserAddFriend.Response
      >(AccountUserAddFriend.topic, dto);
    } catch (e) {
      throw new BadRequestException(e ?? '');
    }
  }

  @UseGuards(JWTAuthGuard)
  @Delete('delete')
  async deleteFriend(@Body() dto: AccountUserDeleteFriend.Request) {
    try {
      return await this.rmqService.send<
        AccountUserDeleteFriend.Request,
        AccountUserDeleteFriend.Response
      >(AccountUserDeleteFriend.topic, dto);
    } catch (e) {
      throw new BadRequestException(e ?? '');
    }
  }

  @UseGuards(JWTAuthGuard)
  @Delete('add-req')
  async addFriendRequest(@Body() dto: AccountUserAddFriendRequest.Request) {
    try {
      return await this.rmqService.send<
        AccountUserAddFriendRequest.Request,
        AccountUserAddFriendRequest.Response
      >(AccountUserAddFriendRequest.topic, dto);
    } catch (e) {
      throw new BadRequestException(e ?? '');
    }
  }
}
