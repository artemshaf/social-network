import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { RMQModule } from 'nestjs-rmq';
import { getJWTConfig } from './configs/jwt.config';
import { getRMQConfig } from './configs/rmq.config';
import { AuthController } from './controllers/auth/auth.controller';
import { UserFriendController } from './controllers/user/friends/user-friends.controller';
import { UserProfileController } from './controllers/user/profile/user-profile.controller';
import { UserTweetsController } from './controllers/tweets/tweets.controller';
import { JwtStratagy } from './strategy/jwt.stratagy';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.envs/.api.env', isGlobal: true }),
    RMQModule.forRootAsync(getRMQConfig()),
    JwtModule.registerAsync(getJWTConfig()),
    PassportModule,
  ],
  controllers: [
    AuthController,
    UserFriendController,
    UserProfileController,
    UserTweetsController,
  ],
  providers: [JwtStratagy],
})
export class AppModule {}
