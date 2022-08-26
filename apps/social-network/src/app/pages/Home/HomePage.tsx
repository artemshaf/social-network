import cn from 'classnames';
import {
  CardListMessaging,
  FeedList,
  Header,
  Menu,
  NewPost,
  PostList,
} from '@client/components/index';
import { IHomePageInterface } from './HomePage.interface';
import { Account } from '../../components/Plain/cards/Account';
import './HomePage.scss';

export const HomePage = ({ className, ...props }: IHomePageInterface) => {
  return (
    <section className={cn(className, 'home-page')} {...props}>
      <Header />
      <div className="home-page__content">
        <div className="home-page__menu">
          <Menu className="home-page__menu__nav" />
          <Account />
        </div>
        <div className="home-page__posts">
          <NewPost />
          <PostList />
        </div>
        <div className="home-page__feeds">
          <FeedList />
          <Account />
        </div>
        <CardListMessaging className="home-page__messagings" />
      </div>
    </section>
  );
};
