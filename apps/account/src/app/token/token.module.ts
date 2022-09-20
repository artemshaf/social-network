import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Token, TokenSchema } from './model/token.model';
import { TokenCommands } from './token.command';
import { TokenQueries } from './token.queries';
import { JwtModule } from '@nestjs/jwt';
import { getJWTConfig } from '../configs/jwt.config';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Token.name,
        schema: TokenSchema,
      },
    ]),
    JwtModule.registerAsync(getJWTConfig()),
    UserModule,
  ],
  providers: [TokenService, TokenCommands, TokenQueries],
  controllers: [],
  exports: [TokenService],
})
export class TokenModule {}
