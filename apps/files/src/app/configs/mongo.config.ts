import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  getConnectionToken,
  MongooseModuleAsyncOptions,
} from '@nestjs/mongoose';
import { MongoClient } from 'mongodb';

export const getMongoConfig = (): MongooseModuleAsyncOptions => {
  return {
    useFactory: async (configService: ConfigService) => {
      return {
        uri: getMongoString(configService),
      };
    },
    inject: [ConfigService],
    imports: [ConfigModule],
  };
};

const getMongoString = (configService: ConfigService) =>
  'mongodb+srv://' +
  configService.get('DB_LOGIN') +
  ':' +
  configService.get('DB_PASSWORD') +
  '@' +
  configService.get('DB_CLUSTER') +
  '/?retryWrites=true&w=majority';
