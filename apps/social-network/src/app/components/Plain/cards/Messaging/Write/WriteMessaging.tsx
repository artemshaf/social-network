import { Button, Icon, Input } from '@client/components/UI';
import { Card } from '@client/components/index';
import { IWriteMessagingInterface } from './WriteMessaging.interface';
import './WriteMessaging.scss';
import cn from 'classnames';

export const WriteMessaging = ({
  className,
  ...props
}: IWriteMessagingInterface) => {
  return (
    <>
      <Card tag="section" className={cn('write-messaging__container')}>
        <Input
          width="full"
          placeholder="Write a message..."
          className={'write-messaging__input'}
        />
        <div className={'write-messaging__actions'}>
          <Icon icon="image" />
          <Icon icon="fixedClip" />
          <Icon icon="gif" />
          <Icon icon="smile" />
          <Icon icon="more" />
          <Icon icon="ArrowTop" />
        </div>
      </Card>
      <Button>Send</Button>
    </>
  );
};
