import { IsArray } from 'class-validator';

export namespace FileDownloadFile {
  export const topic = 'file.download-file.command';

  export class Request {
    @IsArray()
    ids: string[];
  }

  export class Response {}
}
