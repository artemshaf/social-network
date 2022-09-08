import { BadRequestException, Body, Controller } from '@nestjs/common';
import { RMQRoute, RMQValidate } from 'nestjs-rmq';
import { FriendRepository } from './repository/friend.repository';
import { FriendEntity } from './entity/invite.entity';
import {
  FriendCreate,
  FriendAdd,
  FriendDelete,
} from '@social-network/contracts';

@Controller()
export class FriendCommands {
  constructor(private readonly friendRepository: FriendRepository) {}

  @RMQValidate()
  @RMQRoute(FriendCreate.topic)
  async create(
    @Body() { user }: FriendCreate.Request
  ): Promise<FriendCreate.Response> {
    return this.friendRepository.create(user);
  }

  @RMQValidate()
  @RMQRoute(FriendAdd.topic)
  async addFriend(
    @Body() { from, to }: FriendAdd.Request
  ): Promise<FriendAdd.Response> {
    const isExistedTo = await this.friendRepository.findById(to);
    const isExistedFrom = await this.friendRepository.findById(from);
    if (!isExistedTo || !isExistedFrom) {
      throw new BadRequestException('Такого пользователя не существует');
    }
    const friendEntityTo = await new FriendEntity(
      isExistedTo
    ).addFriendFollower(isExistedFrom.id);
    const friendEntityFrom = await new FriendEntity(
      isExistedFrom
    ).addFriendFollowing(isExistedTo.id);
    await this.friendRepository.update({
      _id: friendEntityTo.user,
      friend: friendEntityTo,
    });
    await this.friendRepository.update({
      _id: friendEntityFrom.user,
      friend: friendEntityFrom,
    });
    return await {};
  }

  @RMQValidate()
  @RMQRoute(FriendDelete.topic)
  async deleteFriend(
    @Body() { from, to }: FriendDelete.Request
  ): Promise<FriendDelete.Response> {
    const isExistedTo = await this.friendRepository.findById(to);
    const isExistedFrom = await this.friendRepository.findById(from);
    if (!isExistedTo || !isExistedFrom) {
      throw new BadRequestException('Такого пользователя не существует');
    }
    const friendEntityTo = await new FriendEntity(
      isExistedTo
    ).deleteFriendFollowing(isExistedFrom.id);
    const friendEntityFrom = await new FriendEntity(
      isExistedFrom
    ).deleteFriendFollower(isExistedTo.id);
    await this.friendRepository.update({
      _id: friendEntityTo.user,
      friend: friendEntityTo,
    });
    await this.friendRepository.update({
      _id: friendEntityFrom.user,
      friend: friendEntityFrom,
    });
    return await {};
  }
}
