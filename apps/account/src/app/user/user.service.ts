import { BadRequestException, Body, Injectable } from '@nestjs/common';
import { InviteStatus } from '../../../../../libs/interfaces/src';
import { UserEntity } from './entity/user.entity';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UserService {
  constructor() {}
}
