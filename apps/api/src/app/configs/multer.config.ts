import { ConfigModule, ConfigService } from '@nestjs/config';
import { MulterModuleAsyncOptions } from '@nestjs/platform-express';
import { diskStorage, Multer } from 'multer';
import multer = require('multer');
import path = require('path');

export const getMulterConfig = (): MulterModuleAsyncOptions => ({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => {
    const storage = diskStorage({
      destination: function (req, file, cb) {
        cb(null, 'tmp/load/');
      },
      filename: function (req, file, cb) {
        const fileName = file.originalname.split('.');
        fileName.pop();
        cb(null, fileName + '-' + Date.now());
      },
    });
    return {
      dest: configService.get('MULTER_DEST'),
      limits: {
        fileSize: 2e7,
      },
      storage,
    };
  },
});
