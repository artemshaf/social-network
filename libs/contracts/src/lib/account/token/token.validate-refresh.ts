import { IsString } from 'class-validator';
import { IToken } from '@social-network/interfaces';

export namespace AccountUserTokenValidateRefresh {
  export const topic = 'account/token.validate-refresh.query';

  export class Request {
    @IsString()
    user: string;
    @IsString()
    refreshToken: string;
  }

  export class Response implements IToken {
    user: string;
    refreshToken: string;
  }
}
