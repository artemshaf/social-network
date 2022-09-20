import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document, ObjectId } from 'mongoose';

@Schema()
export class UserFile extends Document {
  @Prop({ type: Types.Array<ObjectId>, default: [] })
  files_id: [];

  @Prop({ type: Types.Array<ObjectId>, default: [] })
  music_id: [];

  @Prop({ type: Types.Array<ObjectId>, default: [] })
  photos_id: [];
}

export const UserFileSchema = SchemaFactory.createForClass(UserFile);
