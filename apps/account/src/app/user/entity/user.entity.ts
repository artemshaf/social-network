import { IUser, UserRole } from '@social-network/interfaces';
import { compare, genSalt, hash } from 'bcrypt';

export class UserEntity implements IUser {
  _id?: string;
  email: string;
  passwordHash: string;
  userRole: UserRole;
  online?: boolean;
  ban: boolean;

  constructor(user: IUser) {
    this.online = user.online;
    this._id = user._id;
    this.email = user.email;
    this.passwordHash = user.passwordHash;
    this.userRole = user.userRole;
    this.ban = user.ban;
  }

  public async setPassword(password: string) {
    const salt = await genSalt(2);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async validatePassword(password: string) {
    return compare(password, this.passwordHash);
  }

  public setOnline(online: boolean) {
    this.online = online;
    return this;
  }

  // public async addFriendRequest(dto: IFriend) {
  //   this.friends.push({
  //     ...dto,
  //   });
  //   return this;
  // }

  // public async deleteFriendRequest(id: string) {
  //   this.friends = this.friends.filter((item) => item.id !== id);
  //   return this;
  // }

  // public async addFriend(id: string) {
  //   const friend = await this.friends.find((item) => item.id === id);
  //   friend.request_type = InviteStatus.Accepted;
  //   return this;
  // }

  // public async deleteFriend(id: string, request_type: InviteStatus) {
  //   const friend = await this.friends.find((item) => item.id === id);
  //   friend.request_type = request_type;
  //   return this;
  // }

  // public async friendship(id: string) {
  //   const friendReqType = await this.friends.find((item) => item.id === id)
  //     .request_type;
  //   if (friendReqType === 'Rejected') {
  //     return false;
  //   }
  //   return true;
  // }

  // public getProfile(): IProfileUser {
  //   return this.profileUser;
  // }

  // public getTweets(): ITweet[] {
  //   return this.tweets;
  // }

  // public getFriends(): IFriend[] {
  //   return this.friends;
  // }
}
