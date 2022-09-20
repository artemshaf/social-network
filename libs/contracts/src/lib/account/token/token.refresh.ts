import { IsString } from 'class-validator';
import { IUser } from '@social-network/interfaces';

export namespace AccountUserTokenRefresh {
  export const topic = 'account/token.refresh.command';

  export class Request {
    @IsString()
    refreshToken: string;
  }

  export class Response {
    refreshToken: string;
    accessToken: string;
    user: IUser;
  }
}
