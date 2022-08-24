import { Card } from '../Card';
import { MenuData } from './data';
import { IMenuInterface } from './Menu.interface';
import { Link } from 'react-router-dom';

export const Menu = ({ className, ...props }: IMenuInterface) => {
  return (
    <Card tag="ul" className={className} {...props}>
      {MenuData.map((item) => (
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
