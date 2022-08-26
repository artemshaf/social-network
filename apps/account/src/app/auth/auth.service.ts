import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccountAuthRegister } from '@social-network/contracts';
import { UserRole } from '@social-network/interfaces';
import { UserEntity } from '../user/entity/user.entity';
import { UserRepository } from '../user/repository/user.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService
  ) {}

  async login(id: string) {
    return {
      access_token: await this.jwtService.signAsync({ id }),
      user: await this.userRepository.findById(id),
    };
  }

  async register(dto: AccountAuthRegister.Request) {
    const isExisted = await this.userRepository.findByEmail(dto.email);
    if (isExisted) {
      throw new BadRequestException('Такой пользователь уже существует!');
    }
    const newUserEntity = await new UserEntity({
      userRole: UserRole.User,
      email: dto.email,
      passwordHash: '',
    }).setPassword(dto.password);

    const newUser = await this.userRepository.create(newUserEntity);
    return { user: newUser };
  }

  async validateUser(email: string, password: string) {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new BadRequestException('Неверный логин или пароль!');
    }
    const userEntity = new UserEntity(user);
    const isCorrectPassword = await userEntity.validatePassword(password);
    if (!isCorrectPassword) {
      throw new BadRequestException('Неверный логин или пароль!');
    }
    return {
      id: user._id,
    };
  }
}
