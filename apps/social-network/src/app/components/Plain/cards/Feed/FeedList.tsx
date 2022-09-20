import { Icon, Card } from '@client/components/index';
import { Feed } from './Feed';
import { IFeedListInterface } from './Feed.interface';
import { v4 } from 'uuid';
import './Feed.scss';

export const FeedList = ({ list, className, ...props }: IFeedListInterface) => {
  return (
    <Card wrapper className={className} {...props}>
      <div className="feed__info">
        <h1>Add to feed</h1>
        <Icon icon="info" />
      </div>
      {list ? (
        <ul className="feed__list">
          {list.map((item) => (
            <Feed key={v4()} item={item} />
          ))}
        </ul>
      ) : (
        <></>
      )}
    </Card>
  );
};
