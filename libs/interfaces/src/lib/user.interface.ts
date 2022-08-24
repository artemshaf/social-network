import { IFriend } from './friend.interface';
import { ITweet } from './tweets.interface';

export enum userSex {
  Men = 'Men',
  Women = 'Women',
  Not_specified = 'Not_specified',
}

export interface UserLocation {
  city: string;
  country: string;
}

export interface IProfileUser {
  name: string;
  surname: string;
  sex?: userSex;
  bdate?: Date;
  location?: UserLocation;
  status?: string;
  phone?: string;
}

export enum UserRole {
  User = 'User',
  Сonfirmed = 'Сonfirmed',
}

export interface IUser {
  _id?: string;
  email: string;
  passwordHash: string;
  profileUser?: IProfileUser;
  userRole?: UserRole;
  tweets?: ITweet[];
  friends?: IFriend[];
  online?: boolean;
  ban?: boolean;
}
