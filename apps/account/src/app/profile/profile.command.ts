import { BadRequestException, Body, Controller } from '@nestjs/common';
import { RMQRoute, RMQValidate } from 'nestjs-rmq';
import {
  AccountUserDeleteProfile,
  AccountUserProfile,
  AccountUserUpdateProfile,
} from '@social-network/contracts';
import { ProfileRepository } from './repository/profile.repository';

@Controller()
export class ProfileCommand {
  constructor(private readonly profileRepository: ProfileRepository) {}

  // @RMQValidate()
  @RMQRoute(AccountUserUpdateProfile.topic)
  async update(
    @Body() { id, dto }: AccountUserUpdateProfile.Request
  ): Promise<AccountUserUpdateProfile.Response> {
    const profile = await this.profileRepository.update({
      user: id,
      profile: dto,
    });
    if (!profile) {
      throw new BadRequestException('Такого профиля не существует');
    }
    return profile;
  }

  @RMQValidate()
  @RMQRoute(AccountUserDeleteProfile.topic)
  async delete(
    @Body() { id }: AccountUserDeleteProfile.Request
  ): Promise<AccountUserProfile.Response> {
    const profile = await this.profileRepository.delete(id);
    if (!profile) {
      throw new BadRequestException('Такого профиля не существует');
    }
    return profile;
  }
}
