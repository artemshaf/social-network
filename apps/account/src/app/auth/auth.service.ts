import { BadRequestException, Injectable } from '@nestjs/common';
import { AccountAuthRegister } from '@social-network/contracts';
import { UserRole } from '@social-network/interfaces';
import { ProfileRepository } from '../profile/repository/profile.repository';
import { TokenService } from '../token/token.service';
import { UserEntity } from '../user/entity/user.entity';
import { UserRepository } from '../user/repository/user.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly tokenService: TokenService,
    private readonly profileRepository: ProfileRepository
  ) {}

  async login(id: string) {
    const user = await (
      await this.userRepository.findById(id)
    ).$set({ online: true });
    const userOnline = await this.userRepository.update({ _id: id, user });
    const userEntity = new UserEntity(userOnline);
    const tokens = await this.tokenService.generateTokens(userEntity);
    await this.tokenService.saveToken(id, tokens.refreshToken);
    return {
      ...tokens,
      user,
    };
  }

  async logout(id: string) {
    // const user = await (
    //   await this.userRepository.findById(id)
    // ).$set({
    //   online: false,
    // });
    const user = await this.userRepository.findById(id);
    const userEntity = new UserEntity(user).setOnline(false);
    await this.userRepository.update({ _id: id, user: userEntity });
    await this.tokenService.removeTokenByUserId(id);
    return {};
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
    await this.profileRepository.create(newUser._id);
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
