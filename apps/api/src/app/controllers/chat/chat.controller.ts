import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Post,
} from '@nestjs/common';
import { RMQService } from 'nestjs-rmq';
import {
  ChatCreate,
  ChatFind,
  ChatMessageChatAdd,
  ChatMessageChatRemove,
  ChatMessageUserAdd,
  ChatMessageUserRemove,
} from '@social-network/contracts';

@Controller('chat')
export class ChatController {
  constructor(private readonly rmqService: RMQService) {}

  @Post('create')
  async create(@Body() dto: ChatCreate.Request) {
    try {
      const { user } = await this.rmqService.send<
        ChatCreate.Request,
        ChatCreate.Response
      >(ChatCreate.topic, dto);
      return user;
    } catch (e) {
      throw new BadRequestException(e ?? '');
    }
  }

  @Post('find-chat')
  async find(@Body() dto: ChatFind.Request) {
    try {
      const data = await this.rmqService.send<
        ChatFind.Request,
        ChatFind.Response
      >(ChatFind.topic, dto);
      return data;
    } catch (e) {
      throw new BadRequestException(e ?? '');
    }
  }

  @Delete()
  async remove(@Body() dto: ChatCreate.Request) {
    try {
      const { user } = await this.rmqService.send<
        ChatCreate.Request,
        ChatCreate.Response
      >(ChatCreate.topic, dto);
      return user;
    } catch (e) {
      throw new BadRequestException(e ?? '');
    }
  }

  @Delete('remove-user-chat')
  async removeUserChat(@Body() dto: ChatMessageChatRemove.Request) {
    try {
      await this.rmqService.send<
        ChatMessageChatRemove.Request,
        ChatMessageChatRemove.Response
      >(ChatMessageChatRemove.topic, dto);
      return {};
    } catch (e) {
      throw new BadRequestException(e ?? '');
    }
  }

  @Post('add-user-chat')
  async createUserChat(@Body() dto: ChatMessageChatAdd.Request) {
    try {
      await this.rmqService.send<
        ChatMessageChatAdd.Request,
        ChatMessageChatAdd.Response
      >(ChatMessageChatAdd.topic, dto);
      return {};
    } catch (e) {
      throw new BadRequestException(e ?? '');
    }
  }

  @Post('add-user-msg')
  async addUserMessage(@Body() dto: ChatMessageUserAdd.Request) {
    try {
      await this.rmqService.send<
        ChatMessageUserAdd.Request,
        ChatMessageUserAdd.Response
      >(ChatMessageUserAdd.topic, dto);
      return {};
    } catch (e) {
      throw new BadRequestException(e ?? '');
    }
  }

  @Delete('remove-user-msg')
  async removeUserMessage(@Body() dto: ChatMessageUserRemove.Request) {
    try {
      await this.rmqService.send<
        ChatMessageUserRemove.Request,
        ChatMessageUserRemove.Response
      >(ChatMessageUserRemove.topic, dto);
      return {};
    } catch (e) {
      throw new BadRequestException(e ?? '');
    }
  }
}
