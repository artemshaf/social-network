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
import { FriendFriends } from '@social-network/contracts';

@Controller('friends')
export class FriendsController {
  constructor(private readonly rmqService: RMQService) {}

  @Get(':id')
  async get(@Param() { id }: FriendFriends.Request) {
    try {
      return await this.rmqService.send<
        FriendFriends.Request,
        FriendFriends.Response
      >(FriendFriends.topic, { id });
    } catch (e) {
      throw new BadRequestException(e ?? '@Controller(friends)');
    }
  }

  // @UseGuards(JWTAuthGuard)
  // @Post('add')
  // async addFriend(@Body() dto: AccountUserAddFriend.Request) {
  //   try {
  //     return await this.rmqService.send<
  //       AccountUserAddFriend.Request,
  //       AccountUserAddFriend.Response
  //     >(AccountUserAddFriend.topic, dto);
  //   } catch (e) {
  //     throw new BadRequestException(e ?? '');
  //   }
  // }

  // @UseGuards(JWTAuthGuard)
  // @Delete('delete')
  // async deleteFriend(@Body() dto: AccountUserDeleteFriend.Request) {
  //   try {
  //     return await this.rmqService.send<
  //       AccountUserDeleteFriend.Request,
  //       AccountUserDeleteFriend.Response
  //     >(AccountUserDeleteFriend.topic, dto);
  //   } catch (e) {
  //     throw new BadRequestException(e ?? '');
  //   }
  // }
}
