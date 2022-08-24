import { UserAvatar } from '@client/components/Plain';
import { ICardMessagingInterface } from './CardMessaging.interface';
import './CardMessaging.scss';

export const CardMessaging = ({
  message,
  className,
  ...props
}: ICardMessagingInterface) => {
  return (
    <li {...props}>
      <UserAvatar size="sm" src={message.user.img} alt={message.user.name} />
      <div>
        <h4>{message.user.name}</h4>
        <h5>{message.text}</h5>
      </div>
    </li>
  );
};
