import { Button, Icon, Input } from '@client/components/UI';
import { IWriteMessagingInterface } from './WriteMessaging.interface';
import './WriteMessaging.scss';

export const WriteMessaging = ({
  className,
  ...props
}: IWriteMessagingInterface) => {
  return (
    <section>
      <Input placeholder="Write a message..." />
      <div>
        <Icon icon="image" />
        <Icon icon="fixedClip" />
        <Icon icon="gif" />
        <Icon icon="smile" />
        <Icon icon="more" />
        <Icon icon="ArrowTop" />
      </div>
      <Button>Send</Button>
    </section>
  );
};
