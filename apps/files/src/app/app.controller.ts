import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { FileRepository } from './repository/file.repository';
import { Document } from 'mongoose';
import { RMQRoute, RMQValidate } from 'nestjs-rmq';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import {
  FileFindInfo,
  FileReadStream,
  FileWriteFile,
  FileWriteStream,
} from '@social-network/contracts';

@Controller()
export class AppController {
  constructor(private readonly fileRepository: FileRepository) {}

  @RMQValidate()
  @RMQRoute(FileReadStream.topic)
  async readStream({
    id,
  }: FileReadStream.Request): Promise<FileReadStream.Response> {
    return this.fileRepository.readStream(id);
  }

  @RMQValidate()
  @RMQRoute(FileWriteStream.topic)
  async writeStream({
    stream,
    options,
  }: FileWriteStream.Request): Promise<FileWriteStream.Response> {
    return this.fileRepository.writeStream(stream, options);
  }

  @RMQValidate()
  @RMQRoute(FileFindInfo.topic)
  async findInfo({ id }: FileFindInfo.Request): Promise<FileFindInfo.Response> {
    return await this.fileRepository.findInfo(id);
  }

  @RMQValidate()
  @RMQRoute(FileWriteFile.topic)
  @UseInterceptors(AnyFilesInterceptor())
  async writeFile({
    files,
    metadata,
  }: FileWriteFile.Request): Promise<FileWriteFile.Response> {
    return await this.fileRepository.writeFile(files, metadata);
  }
}
