import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { RMQModule } from 'nestjs-rmq';
import { AppService } from './app.service';
import { getMongoConfig } from './configs/mongo.config';
import { getRMQConfig } from './configs/rmq.config';
import {
  Notification,
  NotificationSchema,
  UserNotification,
  UserNotificationSchema,
} from './model/notification.model';
import { NotificationCommands } from './notification.command';
import { NotificationQueries } from './notification.queries';
import { NotificationRepository } from './repository/notification.repository';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.envs/.notification.env',
      isGlobal: true,
    }),
    RMQModule.forRootAsync(getRMQConfig()),
    MongooseModule.forRootAsync(getMongoConfig()),
    MongooseModule.forFeature([
      {
        schema: UserNotificationSchema,
        name: UserNotification.name,
      },
      {
        schema: NotificationSchema,
        name: Notification.name,
      },
    ]),
  ],
  controllers: [],
  providers: [
    AppService,
    NotificationRepository,
    NotificationQueries,
    NotificationCommands,
  ],
})
export class AppModule {}
