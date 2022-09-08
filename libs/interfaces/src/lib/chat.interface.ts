export interface IMessage {
  msg: string;
  sender: string;
  receiver: string;
  date: Date;
}

export interface IUserChats {
  messagesWith: string;
  messages: IMessage[];
}

export interface IChat {
  user: string;
  chats: IUserChats[];
}
