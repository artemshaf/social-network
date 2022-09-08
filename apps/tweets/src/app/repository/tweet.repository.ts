import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IComments } from '@social-network/interfaces';
import { Tweet } from '../model/tweet.model';

@Injectable()
export class TweetRepository {
  constructor(
    @InjectModel(Tweet.name)
    private readonly tweetModel: Model<Tweet>
  ) {}

  async create(user: string) {
    return await this.tweetModel.create({ user });
  }

  async findByUser(user: string) {
    return this.tweetModel.find({ user }).exec();
  }

  async addComment(id: string, comment: IComments) {
    const tweet = await this.tweetModel.findById(id);
    return await this.tweetModel
      .findByIdAndUpdate(id, {
        $push: {
          comments: comment,
        },
      })
      .exec();
  }

  async deleteComment(tweetId: string, commentId: string) {
    return await this.tweetModel.findByIdAndUpdate(tweetId, {
      $pull: {
        comments: {
          _id: commentId,
        },
      },
    });
  }

  async like(id: string, userWhoLiked: string) {
    return await this.tweetModel.findByIdAndUpdate(id, {
      $push: {
        likes: userWhoLiked,
      },
    });
  }

  async remove(tweetId: string) {
    const tweet = await this.tweetModel.findOneAndDelete({ _id: tweetId });
    return { tweet };
  }
}
