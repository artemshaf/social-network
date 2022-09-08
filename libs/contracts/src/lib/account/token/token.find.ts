import { IsString } from 'class-validator';
import { IToken, IUser } from '@social-network/interfaces';

export namespace AccountUserTokenFind {
  export const topic = 'account/token.find.query';

  export class Request {
    @IsString()
    refreshToken: string;
  }

  export class Response implements IToken {
    refreshToken: string;
    user: string;
  }
}
