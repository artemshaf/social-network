import { IsString } from 'class-validator';
import { IToken } from '@social-network/interfaces';

export namespace AccountUserTokenValidateAccess {
  export const topic = 'account/token.validate-access.query';

  export class Request {
    @IsString()
    accessToken: string;
  }

  export class Response {}
}
