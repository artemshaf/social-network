import { ChatFind } from '@social-network/contracts';
import $api from './http';

export class ChatService {
  public static prefixString = 'chat/';

  static async getChat({ user }: ChatFind.Request) {
    return $api.post(this.prefixString + 'find-chat', { user });
  }
  // static async addFriend({ from, to }: FriendAdd.Request) {
  //   return $api.post(this.prefixString, { from, to });
  // }
  // static async deleteFriend(data: FriendDelete.Request) {
  //   return $api.post(this.prefixString + 'delete', data);
  // }
}
