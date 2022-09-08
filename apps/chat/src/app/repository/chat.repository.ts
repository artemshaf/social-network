import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Chat } from '../model/chat.model';

@Injectable()
export class ChatRepository {
  constructor(
    @InjectModel(Chat.name)
    private readonly chatModel: Model<Chat>
  ) {}

  async create(user: string) {
    return this.chatModel.create({ user });
  }

  async find(user: string) {
    return this.chatModel.findOne({ user });
  }

  async createUserChat(receiver: string, sender: string) {
    const removedMessage = await this.chatModel.findOneAndUpdate(
      {
        user: receiver,
      },
      {
        $push: {
          chats: {
            messagesWith: sender,
            messages: [],
          },
        },
      }
    );

    return removedMessage;
  }

  async removeUserChat(whoRemoved: string, messagesWith: string) {
    const chat = await this.chatModel.findOneAndUpdate(
      {
        user: whoRemoved,
      },
      {
        $pull: {
          $where: {
            'chats.messagesWith': messagesWith,
          },
        },
      }
    );
    // chat.chats((item) => {
    //   console.log(item);
    //   console.log(item.messagesWith !== messagesWith);

    //   return item.messagesWith !== messagesWith;
    // });
    // console.log(chat);

    return { chat };
  }

  async addUserMessage(receiver: string, sender: string, msg: string) {
    const senderUser = await this.chatModel.findOneAndUpdate(
      { user: sender },
      {
        $push: {
          'chats.messages': msg,
          $where: {
            'chats.messagesWith': receiver,
          },
        },
      }
    );
    const receiverUser = await this.chatModel.findOneAndUpdate(
      { user: receiver },
      {
        $push: {
          $where: {
            'chats.messagesWith': sender,
          },
        },
      }
    );
    return { receiverUser, senderUser };
  }

  async removeUserMessage(whoRemoved: string, messageId: string) {
    const removedMessage = await this.chatModel.findOneAndUpdate(
      {
        user: whoRemoved,
      },
      {
        $pull: {
          'chats.messagesWith._id': messageId,
        },
      }
    );

    return removedMessage;
  }

  async remove(user: string) {
    return this.chatModel.findOneAndUpdate({ user });
  }
}
