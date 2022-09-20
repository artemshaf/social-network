import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AccountUserGet } from '../../../../../../libs/contracts/src';
import { UserEntity } from '../entity/user.entity';
import { User } from '../model/user.model';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>
  ) {}

  async create(user: UserEntity) {
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }

  async findById(id: string) {
    return this.userModel.findById(id).exec();
  }

  async findByEmail(email: string) {
    return this.userModel.findOne({ email }).exec();
  }

  async update({ _id, user }) {
    return this.userModel
      .findOneAndUpdate({ _id }, { $set: { ...user } })
      .exec();
  }

  async deleteById(id: string) {
    return this.userModel.findByIdAndDelete(id).exec();
  }

  async deleteByEmail(email: string) {
    return this.userModel.findOneAndDelete({ email }).exec();
  }

  async findSample(size = 4) {
    return this.userModel
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
