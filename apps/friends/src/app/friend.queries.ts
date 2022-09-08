import { BadRequestException, Body, Controller } from '@nestjs/common';
import { RMQRoute, RMQValidate } from 'nestjs-rmq';
import { FriendRepository } from './repository/friend.repository';
import { FriendEntity } from './entity/invite.entity';
import {
  FriendCreate,
  FriendAdd,
  FriendDelete,
  FriendFriends,
} from '@social-network/contracts';

@Controller()
export class FriendQueries {
  constructor(private readonly friendRepository: FriendRepository) {}

  @RMQValidate()
  @RMQRoute(FriendFriends.topic)
  async find(
    @Body() { id }: FriendFriends.Request
  ): Promise<FriendFriends.Response> {
    return this.friendRepository.findById(id);
  }
}
