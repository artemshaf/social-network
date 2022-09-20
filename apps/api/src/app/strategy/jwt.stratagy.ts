import { Headers, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { RMQService } from 'nestjs-rmq';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AccountUserTokenValidateAccess } from '@social-network/contracts';

@Injectable()
export class JwtStratagy extends PassportStrategy(Strategy) {
  constructor(
    private readonly rmqService: RMQService,
    private readonly configService: ConfigService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_SECRET_ACCESS'),
    });
  }

  async validate(data) {
    return data;
  }
}
