import {
  AccountUserProfile,
  AccountUserProfileFindSample,
  AccountUserUpdateProfile,
} from '@social-network/contracts';
import $api from './http';

export class ProfileService {
  public static prefixString = 'profile/';
  static async get({ id }: AccountUserProfile.Request) {
    return $api.get(this.prefixString + id);
  }

  static async update(data: AccountUserUpdateProfile.Request) {
    return $api.put(this.prefixString, data);
  }

  static async findSample(data: AccountUserProfileFindSample.Request) {
    return $api.post(this.prefixString + 'find-sample', data);
  }
}
