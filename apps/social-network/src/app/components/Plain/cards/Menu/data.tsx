import { Icon } from '@client/components/UI';
import {
  HOME_ROUTE,
  MESSAGING_ROUTE,
  NETWORK_ROUTE,
  NOTIFICATION_ROUTE,
} from '@client/utils/consts';

export const MenuData = [
  {
    icon: <Icon icon="home" />,
    text: 'Home',
    link: HOME_ROUTE,
  },
  {
    icon: <Icon icon="people" />,
    text: 'Network',
    link: NETWORK_ROUTE,
  },
  {
    icon: <Icon icon="Bag" />,
    text: 'Jobs',
    link: '',
  },
  {
    icon: <Icon icon="messageTwo" />,
    text: 'Messaging',
    link: MESSAGING_ROUTE,
  },
  {
    icon: <Icon icon="notification" />,
    text: 'Notifications',
    link: NOTIFICATION_ROUTE,
  },
  {
    icon: <Icon icon="dots" />,
    text: 'Work',
    link: '',
  },
];
