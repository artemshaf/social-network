import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { RMQModule } from 'nestjs-rmq';
import { AppService } from './app.service';
import { ChatCommands } from './chat.commands';
import { ChatQueries } from './chat.queries';
import { getMongoConfig } from './configs/mongo.config';
import { getRMQConfig } from './configs/rmq.config';
import { Chat, ChatSchema } from './model/chat.model';
import { ChatRepository } from './repository/chat.repository';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.envs/.chat.env', isGlobal: true }),
    RMQModule.forRootAsync(getRMQConfig()),
    MongooseModule.forRootAsync(getMongoConfig()),
    MongooseModule.forFeature([
      {
        schema: ChatSchema,
        name: Chat.name,
      },
    ]),
  ],
  controllers: [],
  providers: [AppService, ChatCommands, ChatQueries, ChatRepository],
})
export class AppModule {}
