export enum INotificationType {
  newLike = 'new Like',
  newComment = 'new Comment',
  newFollower = 'new Follower',
}
export interface INotification {
  type: INotificationType;
  user: string;
  post: string;
  commentId: string;
  text: string;
  date: Date;
}
export interface IUserNotification {
  user: string;

  notifications: INotification[];
}
