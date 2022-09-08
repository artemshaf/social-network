import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { RMQModule } from 'nestjs-rmq';
import { getJWTConfig } from './configs/jwt.config';
import { getRMQConfig } from './configs/rmq.config';
import { AuthController } from './controllers/account/auth/auth.controller';
import { UserProfileController } from './controllers/account/profile/user-profile.controller';
import { ChatController } from './controllers/chat/chat.controller';
import { FileController } from './controllers/file/file.controller';
import { FriendsController } from './controllers/friends/friends.controller';
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
    UserProfileController,
    UserTweetsController,
    FriendsController,
    ChatController,
    FileController,
  ],
  providers: [JwtStratagy],
})
export class AppModule {}
