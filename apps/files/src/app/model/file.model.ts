import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongodb';
import { IFile } from '@social-network/interfaces';

@Schema()
export class File extends Document implements IFile {
  @Prop({ type: ObjectId })
  _id: ObjectId;

  @Prop({ type: Number })
  length: number;

  @Prop({ type: Number })
  chunkSize: number;

  @Prop({ type: Number })
  filename: string;

  @Prop({ type: Array<string> })
  aliases?: string[];

  @Prop({ type: Document })
  metadata?: Document;

  @Prop({ type: Date })
  uploadDate: Date;
}

export const FileSchema = SchemaFactory.createForClass(File);
