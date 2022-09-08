import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  IProfileUser,
  IUserLocation,
  userSex,
} from '@social-network/interfaces';
import { Model } from 'mongoose';
import { AccountUserFindProfile } from '@social-network/contracts';
import { ProfileEntity } from '../entity/profile.entity';
import { Profile } from '../model/profile.model';

@Injectable()
export class ProfileRepository {
  constructor(
    @InjectModel(Profile.name) private readonly profileModel: Model<Profile>
  ) {}

  async create(user: string) {
    const createdProfile = await this.profileModel.create({ user });
    return createdProfile.save();
  }

  async findById(user: string) {
    return this.profileModel.findOne({ id: user }).exec();
  }

  async findByFullName({
    fullName,
    limit = 6,
  }: AccountUserFindProfile.Request) {
    return this.profileModel
      .aggregate([
        {
          $addFields: {
            fullNameFilter: { $concat: ['$name', ' ', '$surname'] },
          },
        },
        {
          $match: {
            fullNameFilter: {
              $regex: fullName,
              $options: 'i',
            },
          },
        },
        {
          $sort: { name: 1 },
        },
        {
          $limit: limit,
        },
      ])
      .exec();
  }

  async update({ user, profile }) {
    return this.profileModel
      .findOneAndUpdate({ id: user }, { $set: { ...profile } })
      .exec();
  }

  async delete(user: string) {
    return this.profileModel.findOneAndDelete({ user }).exec();
  }
}
