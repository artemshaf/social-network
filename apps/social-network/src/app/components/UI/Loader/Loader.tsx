import styles from './Loader.module.scss';
import { ILoaderInterface } from './Loader.interface';
import { Box, CircularProgress } from '@mui/material';

export const Loader = ({ className, ...props }: ILoaderInterface) => {
  return (
    <Box className={styles.loader}>
      <CircularProgress />
    </Box>
  );
};
