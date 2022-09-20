import styles from './MusicListItem.module.scss';
import { IMusicListItemInterface } from './MusicListItem.interface';

export const MusicListItem = ({
  className,
  ...props
}: IMusicListItemInterface) => {
  return (
    <li className={styles.musicListItem} {...props}>
      <img
        src={
          'https://res.cloudinary.com/lmru/image/upload/b_white,c_pad,d_photoiscoming.png,f_auto,h_600,q_auto,w_600/v1/LMCode/81928265.jpg'
        }
      />
      <div>
        <h2>Песня</h2>
        <h3>Исполнитель</h3>
      </div>
      <div className={styles.musicListItemTime}>2:30</div>
    </li>
  );
};
