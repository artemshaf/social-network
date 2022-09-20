import { Card, Chat, CardListMessaging } from '@client/components/index';
import cn from 'classnames';
import { IMessageBlockInterface } from './MessageBlock.interface';
import styles from './MessageBlock.module.scss';

export const MessageBlock = ({
  className,
  ...props
}: IMessageBlockInterface) => {
  return (
    <Card tag="section" className={cn(className, styles.section)} {...props}>
      <CardListMessaging className={cn(styles.messages__list)} messages={[]} />
      <Chat className={cn(styles.chat)} />
    </Card>
  );
};

export default MessageBlock;
