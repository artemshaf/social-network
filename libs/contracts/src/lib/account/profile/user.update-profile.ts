import { IsObject, IsString } from 'class-validator';
import {
  IProfileUser,
  IUserLocation,
  userSex,
} from '@social-network/interfaces';
import { ProfileDto } from 'apps/account/src/app/profile/dtos/profile.dto';
import { Type } from 'class-transformer';

export namespace AccountUserUpdateProfile {
  export const topic = 'account.update-profile.command';

  export class Request {
    @IsString()
    id: string;

    @IsObject({})
    @Type(() => ProfileDto)
    dto: ProfileDto;
  }

  export class Response implements IProfileUser {
    name: string;
    surname: string;
    sex?: userSex | undefined;
    bdate?: Date | undefined;
    location?: IUserLocation | undefined;
    status?: string | undefined;
    phone?: string | undefined;
  }
}
