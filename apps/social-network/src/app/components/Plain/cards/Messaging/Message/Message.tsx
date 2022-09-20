import { Card, UserAvatar } from '@client/components/index';
import cn from 'classnames';
import { IMessageInterface } from './Message.interface';

export const Message = ({ className, ...props }: IMessageInterface) => {
  return (
    <li className={cn(className)} {...props}>
      <UserAvatar />
      <div>
        <Card className={cn({ message_your: true, message_you: true })}></Card>
        <p>time: 10:20</p>
      </div>
    </li>
  );
};
