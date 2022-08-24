import { BadRequestException, Body, Controller } from '@nestjs/common';
import { RMQRoute, RMQValidate } from 'nestjs-rmq';
import {
  AccountUserAddFriend,
  AccountUserAddFriendRequest,
  AccountUserDeleteFriend,
} from '@social-network/contracts';
import { friendType, InviteStatus } from '@social-network/interfaces';
import { UserEntity } from './entity/user.entity';
import { UserRepository } from './repository/user.repository';

@Controller()
export class UserCommands {
  constructor(private readonly userRepository: UserRepository) {}

  @RMQValidate()
  @RMQRoute(AccountUserAddFriend.topic)
  async addFriend(
    @Body() { from, to }: AccountUserAddFriend.Request
  ): Promise<AccountUserAddFriend.Response> {
    const isExistedTo = await this.userRepository.findById(to);
    const isExistedFrom = await this.userRepository.findById(from);
    if (!isExistedTo || !isExistedFrom) {
      throw new BadRequestException('Такого пользователя не существует');
    }
    const userEntityTo = await new UserEntity(isExistedTo).addFriend(
      isExistedFrom.id
    );
    const userEntityFrom = await new UserEntity(isExistedFrom).addFriend(
      isExistedTo.id
    );
    await this.userRepository.update({
      _id: userEntityTo._id,
      user: userEntityTo,
    });
    await this.userRepository.update({
      _id: userEntityFrom._id,
      user: userEntityFrom,
    });
    return await {};
  }

  @RMQValidate()
  @RMQRoute(AccountUserDeleteFriend.topic)
  async deleteFriend(
    @Body() { from, to }: AccountUserDeleteFriend.Request
  ): Promise<AccountUserDeleteFriend.Response> {
    const isExistedTo = await this.userRepository.findById(to);
    const isExistedFrom = await this.userRepository.findById(from);
    if (!isExistedTo || !isExistedFrom) {
      throw new BadRequestException('Такого пользователя не существует');
    }
    const userEntityTo = await new UserEntity(isExistedTo);
    const userEntityFrom = await new UserEntity(isExistedFrom);
    const userEntityToFriendship = await new UserEntity(isExistedTo).friendship(
      from
    );
    console.log(userEntityToFriendship);
    if (!userEntityToFriendship) {
      await userEntityTo.deleteFriendRequest(from);
      await userEntityFrom.deleteFriendRequest(to);
      await this.userRepository.update({
        _id: userEntityTo._id,
        user: userEntityTo,
      });
      await this.userRepository.update({
        _id: userEntityFrom._id,
        user: userEntityFrom,
      });
      return {};
    }
    await userEntityTo.deleteFriend(isExistedFrom.id, InviteStatus.Sent);
    await userEntityFrom.deleteFriend(isExistedTo.id, InviteStatus.Rejected);
    await this.userRepository.update({
      _id: userEntityTo._id,
      user: userEntityTo,
    });
    await this.userRepository.update({
      _id: userEntityFrom._id,
      user: userEntityFrom,
    });
    return {};
  }

  @RMQValidate()
  @RMQRoute(AccountUserAddFriendRequest.topic)
  async addFriendRequest(
    @Body()
    { from, to }: AccountUserAddFriendRequest.Request
  ) {
    const isExistedTo = await this.userRepository.findById(to);
    const isExistedFrom = await this.userRepository.findById(from);
    if (!isExistedTo || !isExistedFrom) {
      throw new BadRequestException('Такого пользователя не существует');
    }
    const userEntityTo = await new UserEntity(isExistedTo).addFriendRequest({
      id: from,
      type: friendType.Common,
      request_type: InviteStatus.Sent,
    });
    const userEntityFrom = await new UserEntity(isExistedFrom).addFriendRequest(
      {
        id: to,
        type: friendType.Common,
        request_type: InviteStatus.Accepted,
      }
    );
    await this.userRepository.update({
      _id: userEntityTo._id,
      user: userEntityTo,
    });
    await this.userRepository.update({
      _id: userEntityFrom._id,
      user: userEntityFrom,
    });
    return {};
  }
}
