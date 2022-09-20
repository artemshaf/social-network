import { IMessagingPageInterface } from './MessagingPage.interface';
import cn from 'classnames';
import {
  Account,
  CardListMessaging,
  Header,
  Menu,
} from '@client/components/index';
import { MessageBlock } from '@client/components/index';
import styles from './MessagingPage.module.scss';

export const MessagingPage = ({
  className,
  ...props
}: IMessagingPageInterface) => {
  return (
    <section className={cn(className, styles.page)} {...props}>
      <Header />
      <Menu className="network-page__menu__nav" />
      <MessageBlock className={styles.message__block} />
    </section>
  );
};
