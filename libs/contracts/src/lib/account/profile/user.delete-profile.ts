import { IsString } from 'class-validator';
import {
  IProfileUser,
  IUserLocation,
  userSex,
} from '@social-network/interfaces';

export namespace AccountUserDeleteProfile {
  export const topic = 'account.delete-profile.command';

  export class Request {
    @IsString()
    id: string;
  }

  export class Response {}
}
