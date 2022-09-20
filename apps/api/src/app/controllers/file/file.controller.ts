import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { RMQService } from 'nestjs-rmq';
import {
  ChatCreate,
  ChatFind,
  ChatMessageChatAdd,
  ChatMessageChatRemove,
  ChatMessageUserAdd,
  ChatMessageUserRemove,
  FileDownloadFile,
  FileFindInfo,
  FileFindMusic,
  FileWriteFile,
} from '@social-network/contracts';
import {
  AnyFilesInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';
import { Express } from 'express';
import { Multer } from 'multer';
import multer = require('multer');

@Controller('file')
export class FileController {
  constructor(private readonly rmqService: RMQService) {}

  @Post('write-files')
  @UseInterceptors(FilesInterceptor('files'))
  async writeFile(
    @Body() { metadata }: FileWriteFile.Request,
    @UploadedFiles() files: Array<Express.Multer.File>
  ) {
    try {
      return await this.rmqService.send<
        FileWriteFile.Request,
        FileWriteFile.Response
      >(FileWriteFile.topic, { files, metadata });
    } catch (e) {
      throw new BadRequestException(e ?? '');
    }
  }

  @Get('download-files')
  async downloadFile(@Body() { ids }: FileDownloadFile.Request) {
    try {
      return await this.rmqService.send<
        FileDownloadFile.Request,
        FileDownloadFile.Response
      >(FileDownloadFile.topic, { ids });
    } catch (e) {
      throw new BadRequestException(e ?? '');
    }
  }

  @Get('find-music')
  async findMusic(@Body() {}: FileFindMusic.Request) {
    try {
      return await this.rmqService.send<
        FileFindMusic.Request,
        FileFindMusic.Response
      >(FileFindMusic.topic, {});
    } catch (e) {
      throw new BadRequestException(e ?? '');
    }
  }

  @Get('find-info')
  async findInfo(@Body() dto: FileFindInfo.Request) {
    try {
      return await this.rmqService.send<
        FileFindInfo.Request,
        FileFindInfo.Response
      >(FileFindInfo.topic, dto);
    } catch (e) {
      throw new BadRequestException(e ?? '');
    }
  }
}
