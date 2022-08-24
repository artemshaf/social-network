import { Icon } from '@client/components/UI';
import { Feed } from './Feed';
import { IFeedListInterface } from './Feed.interface';

export const FeedList = ({ className, ...props }: IFeedListInterface) => {
  return (
    <section>
      <div>
        <h1>Add to feed</h1>
        <Icon icon="info" />
      </div>
      <ul>
        <Feed />
      </ul>
    </section>
  );
};
