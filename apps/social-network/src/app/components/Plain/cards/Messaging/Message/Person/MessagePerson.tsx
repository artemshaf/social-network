import { Card, UserAvatar } from '@client/components/index';
import cn from 'classnames';
import { IMessagePersonInterface } from './MessagePerson.interface';
import styles from './MessagePerson.module.scss';

export const MessagePerson = ({
  className,
  ...props
}: IMessagePersonInterface) => {
  return (
    <Card tag="li" className={cn(className, styles.list__item)} {...props}>
      <UserAvatar />
      <div>
        <div>
          <h3>Jane Cooper</h3>
          <span>date ....</span>
        </div>
        <h4>Felis posuere nisl id neque morbi. Nullam pretium.</h4>
      </div>
    </Card>
  );
};
