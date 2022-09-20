import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import {
  IFriend,
  IProfileUser,
  ITweet,
  IUser,
  UserRole,
} from '@social-network/interfaces';

@Schema({ timestamps: true, _id: true })
export class User extends Document implements IUser {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  passwordHash: string;

  @Prop({
    default: UserRole.User,
    enum: UserRole,
    type: String,
  })
  userRole: UserRole;

  @Prop({ type: Object, default: {} })
  profileUser: IProfileUser;

  @Prop({ default: false })
  online: boolean;
  @Prop({ default: false })
  ban: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
