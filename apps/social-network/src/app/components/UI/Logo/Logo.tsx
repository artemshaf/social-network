import { Icon } from '@client/components/UI';
import cn from 'classnames';
import { ILogoIntreface } from './Logo.intreface';

export const Logo = ({ className, children, ...props }: ILogoIntreface) => {
  return (
    <div className={cn(className)} {...props}>
      <Icon icon="logo" style={{ width: '117px', height: '29px' }} />
      {children}
    </div>
  );
};

export default Logo;
