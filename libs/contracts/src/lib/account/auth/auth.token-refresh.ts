import { IsEmail, IsString } from 'class-validator';
import { IUser } from '@social-network/interfaces';

export namespace AccountAuthTokenRefresh {
  export const topic = 'account/auth.token-refresh.command';

  export class Request {
    @IsEmail()
    refreshToken: string;
  }

  export class Response {
    refreshToken: string;
    accessToken: string;
    user: IUser;
  }
}
