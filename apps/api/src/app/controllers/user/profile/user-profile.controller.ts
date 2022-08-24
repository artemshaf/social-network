import {
  BadRequestException,
  Body,
  Controller,
  Get,
  UseGuards,
} from '@nestjs/common';
import { AccountUserProfile } from '@social-network/contracts';
import { RMQService } from 'nestjs-rmq';
import { JWTAuthGuard } from '../../../guards/jwt.guard';

@Controller('user/profile')
export class UserProfileController {
  constructor(private readonly rmqService: RMQService) {}

  @UseGuards(JWTAuthGuard)
  @Get('')
  async get(@Body() dto: AccountUserProfile.Request) {
    try {
      return await this.rmqService.send<
        AccountUserProfile.Request,
        AccountUserProfile.Response
      >(AccountUserProfile.topic, dto);
    } catch (e) {
      throw new BadRequestException('');
    }
  }
}
