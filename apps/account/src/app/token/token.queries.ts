import { Body, Controller } from '@nestjs/common';
import { RMQRoute, RMQValidate } from 'nestjs-rmq';
import {
  AccountUserTokenValidateAccess,
  AccountUserTokenValidateRefresh,
} from '@social-network/contracts';
import { TokenService } from './token.service';

@Controller()
export class TokenQueries {
  constructor(private readonly tokenService: TokenService) {}

  @RMQValidate()
  @RMQRoute(AccountUserTokenValidateAccess.topic)
  validateAccessToken(
    @Body() accessToken: AccountUserTokenValidateAccess.Request
  ): Promise<AccountUserTokenValidateAccess.Response> {
    return this.tokenService.validateAccessToken(accessToken);
  }

  @RMQValidate()
  @RMQRoute(AccountUserTokenValidateRefresh.topic)
  validateRefreshToken(
    @Body() refreshToken: AccountUserTokenValidateRefresh.Request
  ): Promise<AccountUserTokenValidateRefresh.Response> {
    return this.tokenService.validateRefreshToken(refreshToken);
  }
}
