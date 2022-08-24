import { Card } from '@client/components/Plain';
import { NetworkMenuData } from './data';
import { INetworkMenuInterface } from './NetworkMenu.interface';
import { Link } from 'react-router-dom';

export const NetworkMenu = ({ className, ...props }: INetworkMenuInterface) => {
  return (
    <Card tag="ul" className={className} {...props}>
      {NetworkMenuData.map((item) => (
        <li>
          <Link to={item.link}>
            {item.icon}
            <span>{item.text}</span>
          </Link>
        </li>
      ))}
    </Card>
  );
};
