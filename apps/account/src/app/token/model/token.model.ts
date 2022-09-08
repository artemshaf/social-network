import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { IToken } from '@social-network/interfaces';

@Schema()
export class Token extends Document implements IToken {
  @Prop({ type: String, required: true })
  refreshToken: string;

  @Prop({ type: Types.ObjectId, required: true, ref: 'User' })
  user: string;
}

export const TokenSchema = SchemaFactory.createForClass(Token);
