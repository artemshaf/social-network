import { BadRequestException, Body, Controller } from '@nestjs/common';
import { RMQRoute, RMQValidate } from 'nestjs-rmq';
import {
  AccountUserAddFriend,
  AccountUserAddFriendRequest,
  AccountUserDeleteFriend,
  AccountUserGetFriends,
  AccountUserProfile,
  AccountUserTweets,
} from '@social-network/contracts';
import { friendType, InviteStatus } from '@social-network/interfaces';
import { UserEntity } from './entity/user.entity';
import { UserRepository } from './repository/user.repository';

@Controller()
export class UserQueries {
  constructor(private readonly userRepository: UserRepository) {}

  @RMQValidate()
  @RMQRoute(AccountUserTweets.topic)
  async tweets(
    @Body() { id }: AccountUserTweets.Request
  ): Promise<AccountUserTweets.Response> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new BadRequestException('');
    }
    const userEntityTweets = await new UserEntity(user).getTweets();
    return {
      tweets: userEntityTweets,
    };
  }

  @RMQValidate()
  @RMQRoute(AccountUserProfile.topic)
  async profile(
    @Body() { id }: AccountUserProfile.Request
  ): Promise<AccountUserProfile.Response> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new BadRequestException('');
    }
    const userEntityProfile = await new UserEntity(user).getProfile();
    return userEntityProfile;
  }

  @RMQValidate()
  @RMQRoute(AccountUserGetFriends.topic)
  async getFriends(
    @Body() { id }: AccountUserGetFriends.Request
  ): Promise<AccountUserGetFriends.Response> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new BadRequestException('');
    }
    const userEntityFriends = await new UserEntity(user).getFriends();
    return {
      friends: userEntityFriends,
    };
  }
}
