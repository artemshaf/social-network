import { Body, Controller } from '@nestjs/common';
import { ChatRepository } from './repository/chat.repository';
import { RMQRoute, RMQValidate } from 'nestjs-rmq';
import {
  ChatCreate,
  ChatMessageChatAdd,
  ChatMessageChatRemove,
  ChatMessageUserAdd,
  ChatMessageUserRemove,
  ChatRemove,
} from '@social-network/contracts';

@Controller()
export class ChatCommands {
  constructor(private readonly chatRepository: ChatRepository) {}

  @RMQValidate()
  @RMQRoute(ChatCreate.topic)
  async create(
    @Body() { user }: ChatCreate.Request
  ): Promise<ChatCreate.Response> {
    return this.chatRepository.create(user);
  }

  @RMQValidate()
  @RMQRoute(ChatRemove.topic)
  async remove(
    @Body() { user }: ChatRemove.Request
  ): Promise<ChatRemove.Response> {
    return this.chatRepository.remove(user);
  }

  @RMQValidate()
  @RMQRoute(ChatMessageChatRemove.topic)
  async removeUserChat(
    @Body() { messagesWith, whoRemoved }: ChatMessageChatRemove.Request
  ): Promise<ChatMessageChatRemove.Response> {
    return this.chatRepository.removeUserChat(whoRemoved, messagesWith);
  }

  @RMQValidate()
  @RMQRoute(ChatMessageChatAdd.topic)
  async createUserChat(
    @Body() { receiver, sender }: ChatMessageChatAdd.Request
  ): Promise<ChatMessageChatRemove.Response> {
    return this.chatRepository.createUserChat(receiver, sender);
  }

  @RMQValidate()
  @RMQRoute(ChatMessageUserAdd.topic)
  async addUserMessage(
    @Body() { receiver, sender, msg }: ChatMessageUserAdd.Request
  ): Promise<ChatMessageUserAdd.Response> {
    return this.chatRepository.addUserMessage(receiver, sender, msg);
  }

  @RMQValidate()
  @RMQRoute(ChatMessageUserRemove.topic)
  async removeUserMessage(
    @Body() { messageId, whoRemoved }: ChatMessageUserRemove.Request
  ): Promise<ChatMessageUserRemove.Response> {
    return this.chatRepository.removeUserMessage(whoRemoved, messageId);
  }
}
