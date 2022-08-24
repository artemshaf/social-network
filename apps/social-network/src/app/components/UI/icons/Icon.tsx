import { icons, IIconInterface } from './Icon.interface';
import cn from 'classnames';
import './Icon.scss';

export const Icon = ({ icon, className, ...props }: IIconInterface) => {
  const CurrentIcon = icons[icon];

  return (
    <span className="icon__container">
      <CurrentIcon className={cn(className)} {...props} />
    </span>
  );
};
