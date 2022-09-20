import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
import { RMQModule } from 'nestjs-rmq';
import { AppController } from './app.controller';
import { getMongoConfig } from './configs/mongo.config';
import { getRMQConfig } from './configs/rmq.config';
import { UserFile, UserFileSchema } from './model/userFile.model';
import { FileRepository } from './repository/file.repository';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.envs/.files.env', isGlobal: true }),
    MongooseModule.forRootAsync(getMongoConfig()),
    MongooseModule.forFeature([
      {
        schema: UserFileSchema,
        name: UserFile.name,
      },
    ]),
    RMQModule.forRootAsync(getRMQConfig()),
  ],
  controllers: [AppController],
  providers: [FileRepository],
})
export class AppModule {}
