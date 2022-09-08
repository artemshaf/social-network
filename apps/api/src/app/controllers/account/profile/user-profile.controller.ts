import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  AccountUserFindProfile,
  AccountUserProfile,
  AccountUserUpdateProfile,
} from '@social-network/contracts';
import { RMQService } from 'nestjs-rmq';

@Controller('profile')
export class UserProfileController {
  constructor(private readonly rmqService: RMQService) {}

  @Get(':id')
  async get(@Param() { id }: AccountUserProfile.Request) {
    try {
      return await this.rmqService.send<
        AccountUserProfile.Request,
        AccountUserProfile.Response
      >(AccountUserProfile.topic, { id });
    } catch (e) {
      throw new BadRequestException(e || '@Controller(profile)');
    }
  }

  @Post()
  async findByFullName(@Body() { fullName }: AccountUserFindProfile.Request) {
    try {
      return await this.rmqService.send<
        AccountUserFindProfile.Request,
        AccountUserFindProfile.Response
      >(AccountUserFindProfile.topic, { fullName });
    } catch (e) {
      throw new BadRequestException(e || '@Controller(profile)');
    }
  }

  @Put()
  async update(@Body() { id, dto }: AccountUserUpdateProfile.Request) {
    try {
      return await this.rmqService.send<
        AccountUserUpdateProfile.Request,
        AccountUserUpdateProfile.Response
      >(AccountUserUpdateProfile.topic, { id, dto });
    } catch (e) {
      throw new BadRequestException(e || '@Controller(profile)');
    }
  }
}
