import { ConfigModule, ConfigService } from '@nestjs/config';
import { MulterModuleAsyncOptions } from '@nestjs/platform-express';
import multer = require('multer');

export const getMulterConfig = (): MulterModuleAsyncOptions => ({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => ({
    dest: configService.get('MULTER_DEST') || '/uploads/',
  }),
});
