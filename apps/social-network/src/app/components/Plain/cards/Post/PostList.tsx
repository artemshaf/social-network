import { Card } from '@client/components';
import { v4 } from 'uuid';
import { Post } from './Post';
import { IPostListInterface } from './Post.interface';

export const PostList = ({
  list = [],
  className,
  ...props
}: IPostListInterface) => {
  return list.length > 0 ? (
    <Card wrapper tag="ul" className={className} {...props}>
      {list.map((post) => (
        <Post key={v4()} post={post} />
      ))}
    </Card>
  ) : (
    <></>
  );
};
