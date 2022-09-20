import { IsEmail, IsString } from 'class-validator';
import { IUser } from '@social-network/interfaces';

export namespace AccountAuthRegister {
  export const topic = 'account/auth.register.command';

  export class Request {
    @IsEmail()
    email: string;

    @IsString()
    password: string;
  }

  export class Response {
    user: IUser;
    accessToken: string;
    refreshToken: string;
  }
}
