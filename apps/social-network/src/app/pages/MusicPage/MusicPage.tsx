import styles from './MusicPage.module.scss';
import { IMusicPageInterface } from './MusicPage.interface';
import { Header, Menu, MusicList } from '@client/components';

export const MusicPage = ({ className, ...props }: IMusicPageInterface) => {
  return (
    <section className={styles.musicPage} {...props}>
      <Header />
      <Menu />
      <MusicList items={[]} />
    </section>
  );
};
