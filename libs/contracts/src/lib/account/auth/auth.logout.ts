import { IsEmail, IsString } from 'class-validator';
import { IUser } from '@social-network/interfaces';

export namespace AccountAuthLogout {
  export const topic = 'account/auth.logout.command';

  export class Request {
    @IsString()
    id: string;
  }

  export class Response {
    accessToken: string;
    refreshToken: string;
    user: IUser;
  }
}
