import {
  TweetCreate,
  TweetFind,
  TweetRemove,
  TweetUpdate,
} from '@social-network/contracts';
import $api from './http';

export class TweetService {
  public static prefixString = 'tweets/';
  static async create({ user }: TweetCreate.Request) {
    return $api.post(this.prefixString + '/create' + user);
  }
  static async update(data: TweetUpdate.Request) {
    return $api.post(this.prefixString + '/update', data);
  }
  static async remove(data: TweetRemove.Request) {
    return $api.post(this.prefixString + '/remove', data);
  }
  static async get({ user }: TweetFind.Request) {
    return $api.get(this.prefixString + user);
  }
}
