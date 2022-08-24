import cn from 'classnames';
import Notification from './Notification';
import { INotificationListIntreface } from './Notifications.intreface';
import './Notifications.scss';

export const NotificationList = ({
  notifications = [],
  className,
  ...props
}: INotificationListIntreface) => {
  return (
    <>
      {notifications.length > 0 ? (
        <ul className={cn(className)} {...props}>
          {notifications.map((item) => (
            <Notification notification={item} />
          ))}
        </ul>
      ) : (
        <></>
      )}
    </>
  );
};
