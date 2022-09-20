import styles from './MusicList.module.scss';
import { IMusicListInterface } from './MusicList.interface';
import { Card, Button, Icon } from '@client/components';
import PauseIcon from '@mui/icons-material/Pause';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { MusicListItem } from './MusicListItem/MusicListItem';

export const MusicList = ({ className, ...props }: IMusicListInterface) => {
  return (
    <section className={styles.musicList}>
      <Card className={styles.musicListMain} tag="div">
        <PauseIcon color="action" />
        <NavigateBeforeIcon color="action" />
        <KeyboardArrowRightIcon color="action" />
        <div className={styles.musicListMainInfo}>
          <div>
            <h1 className={styles.musicListMain}>песня</h1>
            <h1 className={styles.musicListMain}>исполнитель</h1>
          </div>
          <div className={styles.musicListMainInfoLine}>
            <div className={styles.musicListMainInfoLinePlay}></div>
          </div>
        </div>
      </Card>
      <Card className={styles.musicListItems} tag="ul" {...props}>
        <MusicListItem item={{}} />
        <MusicListItem item={{}} />
      </Card>
    </section>
  );
};
