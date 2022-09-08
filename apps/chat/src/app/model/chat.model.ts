import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { IChat, IMessage, IUserChats } from '@social-network/interfaces';

@Schema()
export class Message extends Document implements IMessage {
  @Prop({ type: String, required: true, trim: true })
  msg: string;
  @Prop({ type: Types.ObjectId, ref: 'User' })
  sender: string;
  @Prop({ type: Types.ObjectId, ref: 'User' })
  receiver: string;
  @Prop({ type: Date, default: Date.now })
  date: Date;
}

export const MessageSchema = SchemaFactory.createForClass(Message);

@Schema()
export class UserChats extends Document implements IUserChats {
  @Prop({ type: Types.ObjectId, ref: 'User' })
  messagesWith: string;

  @Prop({ type: Types.Array<Message>, ref: 'User', default: [] })
  messages: [Message];
}

export const UserChatsSchema = SchemaFactory.createForClass(UserChats);

@Schema()
export class Chat extends Document implements IChat {
  @Prop({ type: Types.ObjectId, ref: 'User' })
  user: string;
  @Prop({ type: Types.Array<IUserChats>, default: [] })
  chats: [UserChats];
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
