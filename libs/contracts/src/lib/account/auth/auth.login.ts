import { IsEmail, IsString } from 'class-validator';
import { IUser } from '@social-network/interfaces';

export namespace AccountAuthLogin {
  export const topic = 'account/auth.login.command';

  export class Request {
    @IsEmail()
    email: string;

    @IsString()
    password: string;
  }

  export class Response {
    accessToken: string;
    refreshToken: string;
    user: IUser;
  }
}
