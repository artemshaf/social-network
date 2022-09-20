import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard, PassportModule } from '@nestjs/passport';
import { MulterModule } from '@nestjs/platform-express';
import { RMQModule } from 'nestjs-rmq';
import { getJWTConfig } from './configs/jwt.config';
import { getMulterConfig } from './configs/multer.config';
import { getRMQConfig } from './configs/rmq.config';
import { AuthController } from './controllers/account/auth/auth.controller';
import { UserProfileController } from './controllers/account/profile/user-profile.controller';
import { TokenController } from './controllers/account/token/token.controller';
import { UsersController } from './controllers/account/users/users.controller';
import { ChatController } from './controllers/chat/chat.controller';
import { FileController } from './controllers/file/file.controller';
import { FriendsController } from './controllers/friends/friends.controller';
import { UserTweetsController } from './controllers/tweets/tweets.controller';
import { JWTAuthGuard } from './guards/jwt.guard';
import { JwtStratagy } from './strategy/jwt.stratagy';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.envs/.api.env', isGlobal: true }),
    RMQModule.forRootAsync(getRMQConfig()),
    JwtModule.registerAsync(getJWTConfig()),
    MulterModule.registerAsync(getMulterConfig()),
    PassportModule,
  ],
  controllers: [
    AuthController,
    UserProfileController,
    UserTweetsController,
    FriendsController,
    ChatController,
    FileController,
    TokenController,
    UsersController,
  ],
  providers: [
    JwtStratagy,
    JWTAuthGuard,
    {
      provide: APP_GUARD,
      useClass: JWTAuthGuard,
    },
  ],
})
export class AppModule {}
