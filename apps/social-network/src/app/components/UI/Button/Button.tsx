import cn from 'classnames';
import { IButtonInterface } from './Button.interface';
import './Button.scss';

export const Button = ({ className, ...props }: IButtonInterface) => {
  return (
    <button className={cn(className, 'button')} {...props}>
      Button
    </button>
  );
};
