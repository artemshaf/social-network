import { IsString } from 'class-validator';

export namespace AccountUserTokenGenerate {
  export const topic = 'account/token.generate.query';

  export class Request {
    @IsString()
    user: string;
  }

  export class Response {
    refreshToken: string;
    accessToken: string;
  }
}
