import cn from 'classnames';
import { Card, Search } from '@client/components/index';
import { IHeaderInterface } from './Header.interface';
import { Logo } from '@client/components/UI';
import './Header.scss';

export const Header = ({ className, children, ...props }: IHeaderInterface) => {
  return (
    <Card tag="section" className={cn(className, 'header')} {...props}>
      <div>Header DropDown</div>
      <Logo className="header__logo" />
      <Search className="header__search" />
    </Card>
  );
};
