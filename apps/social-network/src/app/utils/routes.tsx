import {
  AuthPage,
  HomePage,
  MessagingPage,
  NetworkPage,
  Notification,
  RegisterPage,
} from '../pages/';
import {
  AUTH_ROUTE,
  HOME_ROUTE,
  MESSAGING_ROUTE,
  NETWORK_ROUTE,
  NOTIFICATION_ROUTE,
  REGISTER_ROUTE,
} from './consts';

export interface IRoute {
  path: string;
  element: JSX.Element;
}

export const authRoutes: IRoute[] = [
  {
    element: <HomePage />,
    path: HOME_ROUTE,
  },
  {
    element: <MessagingPage />,
    path: MESSAGING_ROUTE,
  },
  {
    element: <NetworkPage />,
    path: NETWORK_ROUTE,
  },
  {
    element: <Notification />,
    path: NOTIFICATION_ROUTE,
  },
];

export const publicRoutes: IRoute[] = [
  // ! Страница авторизации
  {
    element: <AuthPage />,
    path: AUTH_ROUTE,
  },
  {
    element: <RegisterPage />,
    path: REGISTER_ROUTE,
  },
];
