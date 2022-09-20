import { Button, UserAvatar } from '@client/components';
import { IFeedInterface } from './Feed.interface';
import './Feed.scss';

export const Feed = ({ item, className, ...props }: IFeedInterface) => {
  return (
    <li className="feed__item">
      <UserAvatar className="feed__itema__img" size="sm" />
      <div className="feed__item__info">
        <h4>{item.surname}</h4>
        <h4>{item.name}</h4>
      </div>
      <Button className="feed__item__btn">+</Button>
      <></>
    </li>
  );
};
