import styles from './Chat.module.scss';
import { IChatInterface } from './Chat.interface';
import { Card, MessageList, WriteMessaging } from '@client/components';

export const Chat = ({ className, ...props }: IChatInterface) => {
  return (
    <Card className={styles.chat} {...props}>
      <div>123</div>
      <MessageList />
      <WriteMessaging />
    </Card>
  );
};
