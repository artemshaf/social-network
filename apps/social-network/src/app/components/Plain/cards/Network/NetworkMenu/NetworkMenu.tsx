import { Card } from '@client/components/Plain';
import { NetworkMenuData } from './data';
import { INetworkMenuInterface } from './NetworkMenu.interface';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import './NetworkMenu.scss';

export const NetworkMenu = ({ className, ...props }: INetworkMenuInterface) => {
  return (
    <Card
      tag="ul"
      wrapper
      className={cn(className, 'network-menu__list')}
      {...props}
    >
      {NetworkMenuData.map((item) => (
        <li className={'network-menu__list-item'}>
          <Link to={item.link}>
            {item.icon}
            <span>{item.text}</span>
          </Link>
        </li>
      ))}
    </Card>
  );
};
