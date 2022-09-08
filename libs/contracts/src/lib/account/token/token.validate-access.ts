import { IsString } from 'class-validator';
import { IToken } from '@social-network/interfaces';

export namespace AccountUserTokenValidateAccess {
  export const topic = 'account/token.validate-access.query';

  export class Request {
    @IsString()
    user: string;
    @IsString()
    accessToken: string;
  }

  export class Response implements IToken {
    user: string;
    refreshToken: string;
  }
}
