import { Card, Chat, WriteMessaging } from '@client/components/index';
import { IMessageBlockInterface } from './MessageBlock.interface';

export const MessageBlock = ({
  className,
  ...props
}: IMessageBlockInterface) => {
  return (
    <Card tag="section" className={className} {...props}>
      <div></div>
      <Chat />
      <WriteMessaging />
    </Card>
  );
};

export default MessageBlock;
