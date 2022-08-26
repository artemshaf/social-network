import { INetworkPageInterface } from './NetworkPage.interface';
import cn from 'classnames';
import {
  CardListMessaging,
  FeedList,
  Header,
  Invitations,
  Menu,
  NetworkMenu,
  SuggestionList,
} from '@client/components/index';

export const NetworkPage = ({ className, ...props }: INetworkPageInterface) => {
  return (
    <section className={cn(className, 'network-page')} {...props}>
      <Header />
      <div className="network-page__content">
        <div className="network-page__menu">
          <Menu className="network-page__menu__nav" />
          <NetworkMenu />
        </div>
        <div className="network-page__network">
          <Invitations />
          <SuggestionList />
        </div>
        <div className="network-page__feeds">
          <FeedList />
          <FeedList />
        </div>
        <CardListMessaging className="network-page__messagings" />
      </div>
    </section>
  );
};
