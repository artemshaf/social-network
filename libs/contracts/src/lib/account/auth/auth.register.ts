import { IsEmail, IsString } from 'class-validator';

export namespace AccountAuthRegister {
  export const topic = 'account/auth.register.command';

  export class Request {
    @IsEmail()
    email: string;

    @IsString()
    password: string;
  }

  export class Response {
    email: string;
  }
}
