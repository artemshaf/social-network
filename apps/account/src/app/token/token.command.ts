import { Body, Controller } from '@nestjs/common';
import { RMQRoute, RMQValidate } from 'nestjs-rmq';
import {
  AccountUserTokenGenerate,
  AccountUserTokenRefresh,
  AccountUserTokenRemove,
  AccountUserTokenSave,
} from '@social-network/contracts';
import { TokenService } from './token.service';

@Controller()
export class TokenCommands {
  constructor(private readonly tokenService: TokenService) {}

  @RMQValidate()
  @RMQRoute(AccountUserTokenGenerate.topic)
  async generateTokens(
    @Body() { user }: AccountUserTokenGenerate.Request
  ): Promise<AccountUserTokenGenerate.Response> {
    return this.tokenService.generateTokens(user);
  }

  @RMQValidate()
  @RMQRoute(AccountUserTokenSave.topic)
  async saveToken(
    @Body() { refreshToken, user }: AccountUserTokenSave.Request
  ): Promise<AccountUserTokenSave.Response> {
    return this.tokenService.saveToken(user, refreshToken);
  }

  @RMQValidate()
  @RMQRoute(AccountUserTokenRemove.topic)
  async removeToken(
    @Body() { id }: AccountUserTokenRemove.Request
  ): Promise<AccountUserTokenRemove.Response> {
    return this.tokenService.removeToken(id);
  }

  @RMQValidate()
  @RMQRoute(AccountUserTokenRefresh.topic)
  async refresh({
    refreshToken,
  }: AccountUserTokenRefresh.Request): Promise<AccountUserTokenRefresh.Response> {
    return this.tokenService.refresh(refreshToken);
  }
}
