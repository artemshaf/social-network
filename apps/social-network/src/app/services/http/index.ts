import axios, { AxiosRequestConfig } from 'axios';
import { baseURL } from '@client/utils/consts';
import { AccountAuthTokenRefresh } from '@social-network/contracts';

const $api = axios.create({
  baseURL,
});

$api.interceptors.request.use((config: AxiosRequestConfig) => {
  if (config.headers) {
    config.headers.Authorization = `Bearer ${localStorage.getItem(
      'accessToken'
    )}`;
  }
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const refreshToken = localStorage.getItem('refreshToken');
        const response = await axios.post<
          AccountAuthTokenRefresh.Request,
          AccountAuthTokenRefresh.Response
        >(`${baseURL}token/refresh`, { refreshToken });
        console.log(response);
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('refreshToken', response.refreshToken);
        return $api.request(originalRequest);
      } catch (e) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        console.log('НЕ АВТОРИЗОВАН');
        // location.href = '/auth';
      }
    }
    throw error;
  }
);

export default $api;
