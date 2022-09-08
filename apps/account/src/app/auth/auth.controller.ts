import { Body, Controller } from '@nestjs/common';
import { RMQRoute, RMQValidate } from 'nestjs-rmq';
import {
  AccountAuthLogin,
  AccountAuthLogout,
  AccountAuthRegister,
} from '@social-network/contracts';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @RMQValidate()
  @RMQRoute(AccountAuthLogin.topic)
  async login(
    @Body() { email, password }: AccountAuthLogin.Request
  ): Promise<AccountAuthLogin.Response> {
    const { id } = await this.authService.validateUser(email, password);
    return this.authService.login(id);
  }

  @RMQValidate()
  @RMQRoute(AccountAuthLogout.topic)
  async logout(@Body() { id }: AccountAuthLogout.Request) {
    return this.authService.logout(id);
  }

  @RMQValidate()
  @RMQRoute(AccountAuthRegister.topic)
  async register(
    @Body() { email, password }: AccountAuthRegister.Request
  ): Promise<AccountAuthRegister.Response> {
    return this.authService.register({ email, password });
  }
}
