import { IsNumber, IsOptional } from 'class-validator';
import { IUser } from '@social-network/interfaces';

export namespace AccountUserGet {
  export const topic = 'account.users-find-sample.query';

  export class Request {
    @IsNumber()
    @IsOptional()
    size: number;
  }

  export class Response {
    users: IUser[];
  }
}
