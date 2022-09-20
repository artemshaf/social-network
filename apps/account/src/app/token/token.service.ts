import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserEntity } from '../user/entity/user.entity';
import { UserRepository } from '../user/repository/user.repository';
import { Token } from './model/token.model';

@Injectable()
export class TokenService {
  constructor(
    @InjectModel(Token.name) private readonly tokenModel: Model<Token>,
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) {}

  async generateTokens(user) {
    const accessToken = await this.jwtService.signAsync(
      { user },
      {
        secret: this.configService.get('JWT_SECRET_ACCESS'),
        expiresIn: '10m',
      }
    );
    const refreshToken = await this.jwtService.signAsync(
      { user },
      {
        secret: this.configService.get('JWT_SECRET_REFRESH'),
        expiresIn: '30d',
      }
    );

    return {
      accessToken,
      refreshToken,
    };
  }

  async saveToken(user, refreshToken) {
    const tokenByUser = await this.tokenModel.findOne({ user });
    if (tokenByUser) {
      tokenByUser.refreshToken = refreshToken;
      return await tokenByUser.save();
    }
    const token = await this.tokenModel.create({ user, refreshToken });
    return token;
  }

  async removeToken(refreshToken) {
    const tokenByUser = await this.tokenModel.findOneAndDelete({
      refreshToken,
    });
    return tokenByUser;
  }

  async removeTokenByUserId(id) {
    const tokenByUser = await this.tokenModel.findOneAndDelete({
      user: id,
    });
    return tokenByUser;
  }

  validateAccessToken(accessToken) {
    try {
      console.log('accessToken - validateAccessToken');
      console.log(accessToken);

      const userData = this.jwtService.verify(
        accessToken,
        this.configService.get('JWT_SECRET_ACCESS')
      );
      return userData;
    } catch (error) {
      return null;
    }
  }

  validateRefreshToken(refreshToken) {
    try {
      const userData = this.jwtService.verify(refreshToken, {
        secret: this.configService.get('JWT_SECRET_REFRESH'),
      });
      return userData;
    } catch (error) {
      return null;
    }
  }

  async findRefreshToken(refreshToken) {
    return this.tokenModel.findOne({ refreshToken });
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw new UnauthorizedException();
    }
    const userData = await this.validateRefreshToken(refreshToken);
    const tokenFromDb = await this.findRefreshToken(refreshToken);
    if (!userData || !tokenFromDb) {
      throw new UnauthorizedException();
    }
    const user = await this.userRepository.findById(userData.user._id);
    const tokens = await this.generateTokens(user._id);
    await this.saveToken(user._id, tokens.refreshToken);
    return {
      ...tokens,
      user,
    };
  }
}
