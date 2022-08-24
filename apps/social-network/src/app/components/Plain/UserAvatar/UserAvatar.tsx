import cn from 'classnames';
import { IUserAvatarInterface } from './UserAvatar.interface';
import './UserAvatar.scss';
import DefaultImg from '../../../../assets/avatars/default.png';

export const UserAvatar = ({
  src,
  alt = 'Default...',
  size = 'md',
  className,
  ...props
}: IUserAvatarInterface) => {
  return (
    <img
      src={src ?? DefaultImg}
      alt={alt}
      {...props}
      className={cn(className, {
        'user-avatar_sm': size === 'sm',
        'user-avatar_md': size === 'md',
        'user-avatar_lg': size === 'lg',
      })}
    />
  );
};
