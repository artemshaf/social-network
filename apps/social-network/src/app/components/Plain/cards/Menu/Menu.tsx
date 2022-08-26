import { Card } from '../Card';
import { MenuData } from './data';
import { IMenuInterface } from './Menu.interface';
import { Link } from 'react-router-dom';
import './Menu.scss';
import cn from 'classnames';

export const Menu = ({ className, ...props }: IMenuInterface) => {
  return (
    <Card tag="ul" className={cn(className, 'menu')} {...props}>
      {MenuData.map((item) => (
        <li className={cn('menu-item')}>
          <Link to={item.link}>
            {item.icon}
            <span>{item.text}</span>
          </Link>
        </li>
      ))}
    </Card>
  );
};
