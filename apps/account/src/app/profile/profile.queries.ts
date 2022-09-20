import { BadRequestException, Body, Controller } from '@nestjs/common';
import { RMQRoute, RMQValidate } from 'nestjs-rmq';
import {
  AccountUserFindProfile,
  AccountUserProfile,
  AccountUserProfileFindSample,
} from '@social-network/contracts';
import { ProfileRepository } from './repository/profile.repository';

@Controller('profile')
export class ProfileQueries {
  constructor(private readonly profileRepository: ProfileRepository) {}

  @RMQRoute(AccountUserProfile.topic)
  async get(
    @Body() { id }: AccountUserProfile.Request
  ): Promise<AccountUserProfile.Response> {
    const profile = await this.profileRepository.findByUser(id);
    if (!profile) {
      throw new BadRequestException('Такого профиля не существует');
    }
    return profile;
  }

  @RMQRoute(AccountUserFindProfile.topic)
  async findByFullName(
    @Body() dto: AccountUserFindProfile.Request
  ): Promise<AccountUserFindProfile.Response> {
    const usersProfile = await this.profileRepository.findByFullName(dto);
    if (!usersProfile) {
      throw new BadRequestException('Такого профиля не существует');
    }
    return { users: usersProfile };
  }

  @RMQValidate()
  @RMQRoute(AccountUserProfileFindSample.topic)
  async findSample(
    @Body() { size }: AccountUserProfileFindSample.Request
  ): Promise<AccountUserProfileFindSample.Response> {
    return {
      profiles: await this.profileRepository.findSample(size),
    };
  }
}
