import { IsString } from 'class-validator';
import { IToken } from '@social-network/interfaces';

export namespace AccountUserTokenRemove {
  export const topic = 'account/token.remove.command';

  export class Request {
    @IsString()
    id: string;
  }

  export class Response implements IToken {
    refreshToken: string;
    user: string;
  }
}
