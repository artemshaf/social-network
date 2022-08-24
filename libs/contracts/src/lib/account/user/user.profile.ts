import { IsString } from 'class-validator';
import {
  IProfileUser,
  UserLocation,
  userSex,
} from '@social-network/interfaces';

export namespace AccountUserProfile {
  export const topic = 'account/user.profile.query';

  export class Request {
    @IsString()
    id: string;
  }

  export class Response implements IProfileUser {
    name: string;
    surname: string;
    sex?: userSex | undefined;
    bdate?: Date | undefined;
    location?: UserLocation | undefined;
    status?: string | undefined;
    phone?: string | undefined;
  }
}
