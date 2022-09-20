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
import { Account } from '@client/components';
import './HomePage.scss';
import { selectUserId, useAppSelector } from '@client/store';
import { useEffect, useState } from 'react';
import { ChatService, ProfileService } from '@client/services';
import {
  AccountUserProfileFindSample,
  ChatFind,
} from '@social-network/contracts';
import { IMessage } from '@social-network/interfaces';

export const HomePage = ({ className, ...props }: IHomePageInterface) => {
  const id = useAppSelector(selectUserId) as string;
  const [feeds, setFeeds] = useState(
    {} as AccountUserProfileFindSample.Response
  );
  const [messages, setMessages] = useState([] as IMessage[]);
  useEffect(() => {
    async function queriesData() {
      const feedsProfile = await (
        await ProfileService.findSample({ size: 10 })
      ).data;
      const chats = await (await ChatService.getChat({ user: id })).data;
      return { feedsProfile, chats };
    }
    queriesData().then((res) => {
      setFeeds(res.feedsProfile);
      setMessages(res.chats.chats);
    });
  }, []);

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
          <FeedList list={feeds.profiles || []} />
          <Account />
        </div>
        <CardListMessaging className="home-page__messagings" />
      </div>
    </section>
  );
};
