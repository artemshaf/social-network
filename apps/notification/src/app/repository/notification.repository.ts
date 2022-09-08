import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { INotification } from '@social-network/interfaces';
import { UserNotification } from '../model/notification.model';

@Injectable()
export class NotificationRepository {
  constructor(
    @InjectModel(UserNotification.name)
    private readonly userNotification: Model<UserNotification>
  ) {}

  async create(user: string) {
    return await this.userNotification.create({ user });
  }

  async update(user: string, notification: INotification) {
    return await this.userNotification.findByIdAndUpdate(
      { user },
      {
        $push: {
          notifications: notification,
        },
      }
    );
  }

  async find(user: string) {
    return await this.userNotification.findOne({ user }).exec();
  }

  async remove(user: string, notificationId: string) {
    const userNotification = await this.userNotification
      .findOne({
        user,
      })
      .findOneAndDelete({
        'notifications._id': notificationId,
      });
    return { userNotification };
  }
}
