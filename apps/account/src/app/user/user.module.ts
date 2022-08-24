import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './model/user.model';
import { UserRepository } from './repository/user.repository';
import { UserCommands } from './user.commands';
import { UserController } from './user.controller';
import { UserQueries } from './user.queries';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        schema: UserSchema,
        name: User.name,
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService, UserRepository, UserCommands, UserQueries],
  exports: [UserRepository],
})
export class UserModule {}
