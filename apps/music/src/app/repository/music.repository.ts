import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IFriend } from '@social-network/interfaces';
import { FriendEntity } from '../entity/invite.entity';
import { Friends } from '../model/music.model';

@Injectable()
export class MusicRepository {
  constructor(
    @InjectModel(Friends.name) private readonly friendModel: Model<Friends>
  ) {}

  async create(user: string) {
    const createdFriend = await this.friendModel.create({ user });
    return createdFriend.save();
  }

  async findById(id: string) {
    return this.friendModel.findById(id).exec();
  }

  async update({ _id, friend }) {
    return this.friendModel
      .findOneAndUpdate({ _id }, { $set: { ...friend } })
      .exec();
  }

  async deleteById(id: string) {
    return this.friendModel.findByIdAndDelete(id).exec();
  }
}
