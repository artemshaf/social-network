import { IsArray, IsString } from 'class-validator';

export namespace FileCreateUserFile {
  export const topic = 'file.create-user-files.command';

  export class Request {
    @IsString()
    id: string;
  }

  export class Response {}
}
