import { Body, Controller } from '@nestjs/common';
import { RMQRoute, RMQValidate } from 'nestjs-rmq';
import { NotificationFind } from '@social-network/contracts';
import { NotificationRepository } from './repository/notification.repository';

@Controller()
export class NotificationQueries {
  constructor(
    private readonly notificationRepository: NotificationRepository
  ) {}

  @RMQValidate()
  @RMQRoute(NotificationFind.topic)
  async find(
    @Body() { user }: NotificationFind.Request
  ): Promise<NotificationFind.Response> {
    return this.notificationRepository.find(user);
  }
}
