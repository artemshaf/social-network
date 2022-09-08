import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { RMQModule } from 'nestjs-rmq';
import { getMongoConfig } from './configs/mongo.config';
import { getRMQConfig } from './configs/rmq.config';
import { FriendCommands } from './friend.command';
import { FriendQueries } from './friend.queries';
import { Friends, FriendSchema } from './model/friends.model';
import { FriendRepository } from './repository/friend.repository';
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.envs/.friend.env', isGlobal: true }),
    RMQModule.forRootAsync(getRMQConfig()),
    MongooseModule.forRootAsync(getMongoConfig()),
    MongooseModule.forFeature([
      {
        schema: FriendSchema,
        name: Friends.name,
      },
    ]),
  ],
  controllers: [],
  providers: [FriendRepository, FriendCommands, FriendQueries],
})
export class AppModule {}
