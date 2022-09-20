import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import {
  IProfileUser,
  IUserLocation,
  userSex,
} from '@social-network/interfaces';

@Schema()
export class Profile extends Document implements IProfileUser {
  @Prop({ type: Types.ObjectId, required: true, ref: 'User' })
  user: string;

  @Prop({ type: String, index: 'text' })
  name: string;

  @Prop({ type: String, index: 'text' })
  surname: string;

  @Prop({ type: String, enum: userSex })
  sex?: userSex;

  @Prop({ type: Date })
  bdate?: Date;

  @Prop({ type: Object })
  location?: IUserLocation;

  @Prop({ type: String })
  status?: string;

  @Prop({ type: String })
  phone?: string;

  @Prop({ type: Types.ObjectId })
  photo?: string;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
