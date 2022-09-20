import {
  AccountAuthLogin,
  AccountAuthLogout,
  AccountAuthRegister,
} from '@social-network/contracts';
import $api from './http';

export class AuthService {
  static async login(data: AccountAuthLogin.Request) {
    return $api.post('/auth/login', data);
  }
  static async register(data: AccountAuthRegister.Request) {
    return $api.post('/auth/register', data);
  }
  static async logout(data: AccountAuthLogout.Request) {
    return $api.post('/auth/logout', data);
  }
}
