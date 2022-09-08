export enum friendType {
  Best = 'Best',
  Study = 'Study',
  Work = 'Work',
  Common = 'Common',
}

export enum InviteStatus {
  Sent = 'Sent',
  Accepted = 'Accepted',
  Rejected = 'Rejected',
}

export interface IFollowers {
  user: string;
  type: friendType;
  inviteStatus: InviteStatus;
}
export interface IFriend {
  user: string;
  followers: IFollowers[];
  following: IFollowers[];
}
