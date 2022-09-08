import { Body, Controller } from '@nestjs/common';
import { ChatRepository } from './repository/chat.repository';
import { RMQRoute, RMQValidate } from 'nestjs-rmq';
import { ChatFind } from '@social-network/contracts';

@Controller()
export class ChatQueries {
  constructor(private readonly chatRepository: ChatRepository) {}

  @RMQValidate()
  @RMQRoute(ChatFind.topic)
  async find(@Body() { user }: ChatFind.Request): Promise<ChatFind.Response> {
    return this.chatRepository.find(user);
  }
}
