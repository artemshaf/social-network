import { IBadgeIntreface } from './Badge.intreface';
import './Badge.scss';

export const Badge = ({ className, children, ...props }: IBadgeIntreface) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};
