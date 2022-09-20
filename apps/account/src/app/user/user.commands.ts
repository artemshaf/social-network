import { BadRequestException, Body, Controller } from '@nestjs/common';
import { RMQRoute, RMQValidate } from 'nestjs-rmq';
import { friendType, InviteStatus } from '@social-network/interfaces';
import { UserEntity } from './entity/user.entity';
import { UserRepository } from './repository/user.repository';

@Controller()
export class UserCommands {
  constructor(private readonly userRepository: UserRepository) {}
}
