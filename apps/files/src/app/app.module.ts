import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
import { RMQModule } from 'nestjs-rmq';
import { AppController } from './app.controller';
import { getMongoConfig } from './configs/mongo.config';
import { getMulterConfig } from './configs/multer.config';
import { getRMQConfig } from './configs/rmq.config';
import { FileRepository } from './repository/file.repository';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.envs/.files.env', isGlobal: true }),
    MongooseModule.forRootAsync(getMongoConfig()),
    RMQModule.forRootAsync(getRMQConfig()),
    MulterModule.register({
      dest: '/tmp/upload',
    }),
  ],
  controllers: [AppController],
  providers: [FileRepository],
})
export class AppModule {}
