export interface IComments {
  _id: string;
  user: string;
  text: string;
  date: Date;
}

export interface ITweet {
  user: string;
  text?: string;
  location: string;
  likes: string[];
  comments: IComments[];
}
