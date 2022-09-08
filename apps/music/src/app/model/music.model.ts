import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  friendType,
  IFollowers,
  IFriend,
  InviteStatus,
} from '@social-network/interfaces';
import { Types, Document } from 'mongoose';

@Schema({ timestamps: true })
export class Follower extends Document implements IFollowers {
  @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
  user: string;
  @Prop({ type: String, required: true, enum: friendType })
  type: friendType;
  @Prop({ type: String, required: true, enum: InviteStatus })
  inviteStatus: InviteStatus;
}

export const FollowerSchema = SchemaFactory.createForClass(Follower);

@Schema()
export class Music extends Document implements IFriend {
  @Prop({ required: true, type: Types.ObjectId, ref: 'User', _id: true })
  user: string;

  @Prop({
    type: Types.Array<Follower>,
    default: [],
  })
  followers: [Follower];

  @Prop({ type: Types.Array<Follower>, default: [] })
  following: [Follower];
}

export const FriendSchema = SchemaFactory.createForClass(Friends);
