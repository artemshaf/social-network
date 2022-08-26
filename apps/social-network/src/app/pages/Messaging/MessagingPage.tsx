import { IMessagingPageInterface } from './MessagingPage.interface';
import cn from 'classnames';
import {
  Account,
  CardListMessaging,
  Header,
  Menu,
} from '@client/components/index';
import { MessageBlock } from '@client/components/index';

export const MessagingPage = ({
  className,
  ...props
}: IMessagingPageInterface) => {
  return (
    <section className={cn(className, 'network-page')} {...props}>
      <Header />
      <div className="network-page__content">
        <div className="network-page__menu">
          <Menu className="network-page__menu__nav" />
          <Account />
        </div>
        <div className="network-page__network">
          <CardListMessaging className="network-page__messagings" />
          <MessageBlock />
        </div>
      </div>
    </section>
  );
};
