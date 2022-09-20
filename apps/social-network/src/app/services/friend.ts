import {
  FriendAdd,
  FriendDelete,
  FriendFriends,
} from '@social-network/contracts';
import $api from './http';

export class FriendService {
  public static prefixString = 'friends/';

  static async getFriends({ id }: FriendFriends.Request) {
    return $api.get(this.prefixString + id);
  }
  static async addFriend({ from, to }: FriendAdd.Request) {
    return $api.post(this.prefixString, { from, to });
  }
  static async deleteFriend(data: FriendDelete.Request) {
    return $api.post(this.prefixString + 'delete', data);
  }
}
