import { IUser } from './user.interface';

export interface INotification {
  user: IUser;
  text: string;
  comments: string;
  reactions: string;
  createdAt: Date;
  updatedAt: Date;
}
