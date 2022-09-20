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
}
