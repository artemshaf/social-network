import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { FileRepository } from './repository/file.repository';
import { Document } from 'mongoose';
import { RMQRoute, RMQValidate } from 'nestjs-rmq';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import {
  FileCreateUserFile,
  FileDownloadFile,
  FileFindInfo,
  FileFindMusic,
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
  @RMQRoute(FileCreateUserFile.topic)
  async createUserFiles({
    id,
  }: FileCreateUserFile.Request): Promise<FileCreateUserFile.Response> {
    return this.fileRepository.createUserFiles(id);
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
  @RMQRoute(FileFindMusic.topic)
  async findMusic({}: FileFindMusic.Response): Promise<FileFindMusic.Request> {
    return await this.fileRepository.findMusic();
  }

  @RMQValidate()
  @RMQRoute(FileWriteFile.topic)
  @UseInterceptors(AnyFilesInterceptor())
  async writeFile({
    files,
    metadata,
  }: FileWriteFile.Request): Promise<FileWriteFile.Response> {
    return await this.fileRepository.writeFiles(files, metadata);
  }

  @RMQValidate()
  @RMQRoute(FileDownloadFile.topic)
  @UseInterceptors(AnyFilesInterceptor())
  async readFiles({
    ids,
  }: FileDownloadFile.Request): Promise<FileDownloadFile.Response> {
    return await this.fileRepository.readFiles(ids);
  }
}
