import { IProfileUser } from '@social-network/interfaces';
import { IsNumber, IsOptional } from 'class-validator';

export namespace AccountUserProfileFindSample {
  export const topic = 'account.profile-find-sample.query';

  export class Request {
    @IsNumber()
    @IsOptional()
    size: number;
  }

  export class Response {
    profiles: IProfileUser[];
  }
}
