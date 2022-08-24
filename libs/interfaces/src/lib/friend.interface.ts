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

export interface IFriend {
  id: string;
  type: friendType;
  request_type: InviteStatus;
}
