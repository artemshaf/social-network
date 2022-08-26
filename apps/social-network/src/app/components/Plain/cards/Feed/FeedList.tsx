import { Icon, Card } from '@client/components/index';
import { Feed } from './Feed';
import { IFeedListInterface } from './Feed.interface';
import './Feed.scss';

export const FeedList = ({ className, ...props }: IFeedListInterface) => {
  return (
    <Card className={className} {...props}>
      <div className="feed__info">
        <h1>Add to feed</h1>
        <Icon icon="info" />
      </div>
      <ul>
        <Feed />
      </ul>
    </Card>
  );
};
