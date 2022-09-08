import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { RMQModule } from 'nestjs-rmq';
import { AppService } from './app.service';
import { getMongoConfig } from './configs/mongo.config';
import { getRMQConfig } from './configs/rmq.config';
import {
  Comments,
  CommentsSchema,
  Tweet,
  TweetSchema,
} from './model/tweet.model';
import { TweetRepository } from './repository/tweet.repository';
import { TweetCommands } from './tweet.command';
import { TweetQueries } from './tweet.queries';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.envs/.tweet.env',
      isGlobal: true,
    }),
    RMQModule.forRootAsync(getRMQConfig()),
    MongooseModule.forRootAsync(getMongoConfig()),
    MongooseModule.forFeature([
      {
        schema: TweetSchema,
        name: Tweet.name,
      },
    ]),
  ],
  controllers: [],
  providers: [AppService, TweetRepository, TweetCommands, TweetQueries],
})
export class AppModule {}
