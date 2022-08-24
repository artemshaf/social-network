import { Post } from './Post';
import { IPostListInterface } from './Post.interface';

export const PostList = ({ className, ...props }: IPostListInterface) => {
  return (
    <ul className={className} {...props}>
      <Post />
    </ul>
  );
};
