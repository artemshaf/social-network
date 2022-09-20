import { IFile } from './file.interface';

export interface IComments {
  _id: string;
  user: string;
  text: string;
  date: Date;
}

export interface ITweet {
  user: string;
  text?: string;
  files: IFile[];
  location: string;
  likes: string[];
  comments: IComments[];
}
