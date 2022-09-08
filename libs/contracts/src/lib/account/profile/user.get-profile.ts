import { IsString } from 'class-validator';
import {
  IProfileUser,
  IUserLocation,
  userSex,
} from '@social-network/interfaces';

export namespace AccountUserProfile {
  export const topic = 'account.profile.query';

  export class Request {
    @IsString()
    id: string;
  }

  export class Response implements IProfileUser {
    name: string;
    surname: string;
    photos?: string[] | undefined;
    sex?: userSex | undefined;
    bdate?: Date | undefined;
    location?: IUserLocation | undefined;
    status?: string | undefined;
    phone?: string | undefined;
  }
}
