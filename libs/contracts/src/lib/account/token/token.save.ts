import { IsString } from 'class-validator';
import { IToken } from '@social-network/interfaces';

export namespace AccountUserTokenSave {
  export const topic = 'account/token.save.command';

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
