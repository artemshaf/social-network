import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { IComments, ITweet } from '@social-network/interfaces';

@Schema()
export class Comments extends Document {
  @Prop({ type: Types.ObjectId })
  _id: string;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  user: string;

  @Prop({ type: String })
  text: string;

  @Prop({ type: Date, default: Date.now() })
  date: Date;
}

export const CommentsSchema = SchemaFactory.createForClass(Comments);

@Schema({ timestamps: true })
export class Tweet extends Document implements ITweet {
  @Prop({ type: Types.ObjectId, ref: 'User' })
  user: string;

  @Prop({ type: String, required: true })
  text?: string;

  @Prop({ type: String })
  location: string;

  @Prop({ type: Types.Array<Types.ObjectId>, required: true, ref: 'User' })
  likes: string[];

  @Prop({ type: Types.Array<Comments>, required: true, default: [] })
  comments: [Comments];
}

export const TweetSchema = SchemaFactory.createForClass(Tweet);
