import styles from './FilesPage.module.scss';
import { IFilesPageInterface } from './FilesPage.interface';
import { Files, Header, Menu } from '@client/components';

export const FilesPage = ({ className, ...props }: IFilesPageInterface) => {
  return (
    <section className={styles.filesPage} {...props}>
      <Header />
      <Menu />
      <Files />
    </section>
  );
};
