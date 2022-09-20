import { Card } from '@client/components/index';
import { MessagePerson } from './MessagePerson';
import { IMessagePersonListInterface } from './MessagePerson.interface';
import styles from './MessagePerson.module.scss';

export const MessagePersonList = ({
  className,
  ...props
}: IMessagePersonListInterface) => {
  return (
    <Card tag="ul" className={styles.list} {...props}>
      <MessagePerson />
      <MessagePerson />
      <MessagePerson />
      <MessagePerson />
    </Card>
  );
};
