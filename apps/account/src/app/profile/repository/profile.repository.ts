import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  IProfileUser,
  IUserLocation,
  userSex,
} from '@social-network/interfaces';
import { Model, Types } from 'mongoose';
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

  async findByUser(user: string) {
    return this.profileModel
      .findOne({
        user: new Types.ObjectId(user),
      })
      .exec();
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
    console.log(user);
    console.log(profile);

    return this.profileModel
      .findOneAndUpdate(
        { user: new Types.ObjectId(user) },
        { $set: { ...profile } }
      )
      .exec();
  }

  async delete(user: string) {
    return this.profileModel.findOneAndDelete({ user }).exec();
  }

  async findSample(size: number = 4) {
    return this.profileModel
      .aggregate([
        {
          $sample: {
            size,
          },
        },
      ])
      .exec();
  }
}
