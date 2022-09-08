import { BadRequestException } from '@nestjs/common';
import {
  friendType,
  IFollowers,
  IFriend,
  InviteStatus,
} from '@social-network/interfaces';

export class FriendEntity implements IFriend {
  user: string;
  followers: IFollowers[];
  following: IFollowers[];

  constructor(friend: IFriend) {
    this.user = friend.user;
    this.followers = friend.followers;
    this.following = friend.following;
  }

  async addFriendFollower(user: string) {
    const friend = this.followers.find((item) => item.user === user);
    if (friend) {
      throw new BadRequestException('Такой пользователь уже в друзьях');
    }
    this.followers.push({
      user,
      inviteStatus: InviteStatus.Accepted,
      type: friendType.Common,
    });
    return this;
  }
  async addFriendFollowing(user: string) {
    const friend = this.following.find((item) => item.user === user);
    if (friend) {
      throw new BadRequestException('Такой пользователь уже в друзьях');
    }
    this.following.push({
      user,
      inviteStatus: InviteStatus.Sent,
      type: friendType.Common,
    });
    return this;
  }

  async deleteFriendFollower(user: string) {
    const friend = this.followers.find((item) => item.user === user);
    if (!friend) {
      throw new BadRequestException('Такой пользователь не в друзьях');
    }
    this.followers = this.followers.filter((item) => item.user !== user);
    return this;
  }

  async deleteFriendFollowing(user: string) {
    const friend = this.following.find((item) => item.user === user);
    if (!friend) {
      throw new BadRequestException('Такой пользователь не в друзьях');
    }
    this.following = this.following.filter((item) => item.user !== user);
    return this;
  }
}
