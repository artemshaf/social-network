import { Body, Controller } from '@nestjs/common';
import { RMQRoute, RMQValidate } from 'nestjs-rmq';
import { AccountUserGet } from '@social-network/contracts';
import { UserRepository } from './repository/user.repository';

@Controller()
export class UserQueries {
  constructor(private readonly userRepository: UserRepository) {}

  @RMQValidate()
  @RMQRoute(AccountUserGet.topic)
  async findSample(@Body() { size }: AccountUserGet.Request) {
    return await this.userRepository.findSample(size);
  }
}
