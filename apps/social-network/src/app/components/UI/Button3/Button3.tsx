import styles from './Button3.module.scss';
import { IButton3Interface } from './Button3.interface';

export const Button3 = ({
  className,
  ...props
}: IButton3Interface) => {
  return (
    <div className={styles.button3} {...props}>
      Button3 Component
    </div>
  );
};
