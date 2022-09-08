import { ConfigModule, ConfigService } from '@nestjs/config';
import { MulterModuleAsyncOptions } from '@nestjs/platform-express';
import multer = require('multer');

export const getMulterConfig = (): MulterModuleAsyncOptions => ({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => {
    const storage = multer.diskStorage({
      // notice you are calling the multer.diskStorage() method here, not multer()
      destination: function (req, file, cb) {
        console.log(file);

        cb(null, 'uploads/');
      },
      filename: function (req, file, cb) {
        cb(null, file.filename + '-' + Date.now());
      },
    });
    const upload = multer({ storage }); //provide the return value from
    return {
      dest: configService.get('MULTER_DEST') || 'tmp/uploads/',
      limits: {
        fileSize: 2e7,
      },
      storage: upload,
    };
  },
});
