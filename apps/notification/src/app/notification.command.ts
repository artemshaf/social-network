import { Body, Controller } from '@nestjs/common';
import { RMQRoute, RMQValidate } from 'nestjs-rmq';
import {
  NotificationCreate,
  NotificationFind,
  NotificationUpdate,
} from '@social-network/contracts';
import { NotificationRepository } from './repository/notification.repository';

@Controller()
export class NotificationCommands {
  constructor(
    private readonly notificationRepository: NotificationRepository
  ) {}

  @RMQValidate()
  @RMQRoute(NotificationCreate.topic)
  async create(
    @Body() { user }: NotificationCreate.Request
  ): Promise<NotificationCreate.Response> {
    return this.notificationRepository.create(user);
  }

  @RMQValidate()
  @RMQRoute(NotificationUpdate.topic)
  async update(
    @Body() { user, notification }: NotificationUpdate.Request
  ): Promise<NotificationUpdate.Response> {
    return this.notificationRepository.update(user, notification);
  }

  @RMQValidate()
  @RMQRoute(NotificationFind.topic)
  async remove(
    @Body() { user }: NotificationFind.Request
  ): Promise<NotificationFind.Response> {
    return this.notificationRepository.find(user);
  }
}
