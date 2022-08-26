import { Icon } from '@client/components/UI';
import cn from 'classnames';
import { ILogoIntreface } from './Logo.intreface';

export const Logo = ({ className, children, ...props }: ILogoIntreface) => {
  return (
    <div className={cn(className)} {...props}>
      <Icon icon="logo" width={'117px'} />
      {children}
    </div>
  );
};

export default Logo;
