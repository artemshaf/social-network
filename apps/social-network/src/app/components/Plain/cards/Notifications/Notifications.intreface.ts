import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { INotification } from '@social-network/interfaces';

export interface INotificationListIntreface
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  notifications: INotification[];
}
export interface INotificationIntreface
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  notification: INotification;
}
