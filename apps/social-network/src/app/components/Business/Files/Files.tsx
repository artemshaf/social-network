import styles from './Files.module.scss';
import { IFilesInterface } from './Files.interface';
import { FilesListItem } from './FilesListItem/FilesListItem';
import { Card, Input, Button } from '@client/components';

export const Files = ({ className, ...props }: IFilesInterface) => {
  return (
    <Card className={styles.files} {...props} tag="section">
      <div className={styles.actions}>
        <span>Файлы: 20</span>
        <Button className={styles.actions__button}>Загрузить</Button>
      </div>
      <Card className={styles.actions__input__block}>
        <Input />
      </Card>
      <Card className={styles.files} {...props} tag="ul">
        <FilesListItem item={{}} />
      </Card>
    </Card>
  );
};
