import styles from './WorkPage.module.scss';
import { IWorkPageInterface } from './WorkPage.interface';
import cn from 'classnames';
import { Files, Header, Menu } from '@client/components';

export const WorkPage = ({ className, ...props }: IWorkPageInterface) => {
  return (
    <section className={cn(className, styles.page)} {...props}>
      <Header />
      <Menu className="network-page__menu__nav" />
      <Files />
    </section>
  );
};
