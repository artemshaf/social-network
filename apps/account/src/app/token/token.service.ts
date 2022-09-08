import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Token } from './model/token.model';

@Injectable()
export class TokenService {
  constructor(
    @InjectModel(Token.name) private readonly tokenModel: Model<Token>,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) {}

  async generateTokens(user) {
    const accessToken = await this.jwtService.signAsync(
      { ...user },
      {
        secret: this.configService.get('JWT_SECRET_ACCESS'),
        expiresIn: '10m',
      }
    );
    const refreshToken = await this.jwtService.signAsync(
      { ...user },
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
      const userData = this.jwtService.verify(
        refreshToken,
        this.configService.get('JWT_SECRET_REFRESH')
      );
      return userData;
    } catch (error) {
      return null;
    }
  }

  async findRefreshToken(refreshToken) {
    return this.tokenModel.findOne({ refreshToken }).exec();
  }
}
