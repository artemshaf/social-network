import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import {
  INotification,
  INotificationType,
  IUserNotification,
} from '@social-network/interfaces';

@Schema()
export class Notification extends Document implements INotification {
  @Prop({ enum: INotificationType, type: String })
  type: INotificationType;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  user: string;

  @Prop({ type: Types.ObjectId, ref: 'Tweet' })
  post: string;

  @Prop({ type: String })
  commentId: string;

  @Prop({ type: String })
  text: string;

  @Prop({ type: Date, default: Date.now })
  date: Date;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);

@Schema()
export class UserNotification extends Document implements IUserNotification {
  @Prop({ type: Types.ObjectId, ref: 'User' })
  user: string;

  @Prop({ type: Types.Array<Notification>, default: [] })
  notifications: INotification[];
}

export const UserNotificationSchema =
  SchemaFactory.createForClass(UserNotification);
