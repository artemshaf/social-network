import { Document, GridFSFile, ObjectId } from 'mongodb';

export class IFile implements GridFSFile {
  _id: ObjectId;
  length: number;
  chunkSize: number;
  filename: string;
  contentType?: string | undefined;
  aliases?: string[] | undefined;
  metadata?: Document | undefined;
  uploadDate: Date;
}
