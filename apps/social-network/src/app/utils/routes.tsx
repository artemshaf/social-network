import {
  AuthPage,
  HomePage,
  MessagingPage,
  NetworkPage,
  Notification,
  RegisterPage,
  ProfilePage,
  ProfilePageEdit,
} from '@client/pages/';

import {
  AUTH_ROUTE,
  HOME_ROUTE,
  MESSAGING_ROUTE,
  NETWORK_ROUTE,
  NOTIFICATION_ROUTE,
  PROFILE_EDIT_ROUTE,
  PROFILE_ID_ROUTE,
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
  {
    element: <ProfilePage />,
    path: PROFILE_ID_ROUTE,
  },
  {
    element: <ProfilePageEdit />,
    path: PROFILE_EDIT_ROUTE,
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
