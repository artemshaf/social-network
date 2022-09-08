import { IsNumber, IsOptional, IsString } from 'class-validator';
import {
  IProfileUser,
  IUserLocation,
  userSex,
} from '@social-network/interfaces';

export namespace AccountUserFindProfile {
  export const topic = 'account.findByFullName-profile.command';

  export class Request {
    @IsString()
    fullName: string;

    @IsOptional()
    @IsNumber()
    limit?: number;
  }

  export class Response {
    users: IProfileUser[];
  }
}
