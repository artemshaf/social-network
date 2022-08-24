import { Icon, Input } from '@client/components/UI';
import { Search } from '@client/components/Plain';
import { CardMessaging } from './CardMessaging';
import { ICardListMessagingInterface } from './CardMessaging.interface';

export const CardListMessaging = ({
  messages = [],
  className,
  ...props
}: ICardListMessagingInterface) => {
  return (
    <section>
      <div>
        <h1>Messaging</h1>
        <Icon icon="share" />
        <Icon icon="more" />
      </div>
      <Search placeholder="Search messaging" />
      {messages.length > 0 ? (
        <ul {...props}>
          {messages.map((msg) => (
            <CardMessaging message={msg} />
          ))}
        </ul>
      ) : (
        <></>
      )}
    </section>
  );
};
