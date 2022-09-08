import { IsObject, IsString } from 'class-validator';
import { IToken, IUser } from '@social-network/interfaces';

export namespace AccountUserTokenGenerate {
  export const topic = 'account/token.generate.query';

  export class Request {
    @IsObject()
    user: IUser;
  }

  export class Response {
    refreshToken: string;
    accessToken: string;
  }
}
