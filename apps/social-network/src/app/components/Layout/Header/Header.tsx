import cn from 'classnames';
import { IHeaderInterface } from './Header.interface';

const Header = ({ className, children, ...props }: IHeaderInterface) => {
  return (
    <section className={cn(className)} {...props}>
      Header
    </section>
  );
};

export default Header;
