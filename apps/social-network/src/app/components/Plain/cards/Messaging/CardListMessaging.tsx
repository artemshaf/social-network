import { Icon, Input, Card } from '@client/components/index';
import { Search } from '@client/components/Plain';
import cn from 'classnames';
import { CardMessaging } from './CardMessaging';
import { ICardListMessagingInterface } from './CardMessaging.interface';

export const CardListMessaging = ({
  messages = [],
  className,
  ...props
}: ICardListMessagingInterface) => {
  return (
    <Card wrapper className={cn('messaging__card-list', className)} {...props}>
      <div className="messaging__card-list__info">
        <h1>Messaging</h1>
        <div>
          <Icon icon="share" />
          <Icon icon="more" />
        </div>
      </div>
      <Search
        placeholder="Search messaging"
        className="messaging__card-list__search"
      />
      {messages.length > 0 ? (
        <ul {...props}>
          {messages.map((msg) => (
            <CardMessaging message={msg} />
          ))}
        </ul>
      ) : (
        <></>
      )}
    </Card>
  );
};
