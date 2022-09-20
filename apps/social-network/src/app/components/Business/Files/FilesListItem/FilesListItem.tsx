import styles from './FilesListItem.module.scss';
import { IFilesListItemInterface } from './FilesListItem.interface';
import ArticleIcon from '@mui/icons-material/Article';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import DeleteIcon from '@mui/icons-material/Delete';

export const FilesListItem = ({
  className,
  ...props
}: IFilesListItemInterface) => {
  return (
    <li className={styles.file} {...props}>
      <ArticleIcon />
      <h2>Песня</h2>
      <div className={styles.file__actions}>
        <span>13 мб</span>
        <SaveAltIcon />
        <DeleteIcon />
      </div>
    </li>
  );
};
