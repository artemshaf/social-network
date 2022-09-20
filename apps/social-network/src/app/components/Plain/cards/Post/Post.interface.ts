import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ITweet } from '@social-network/interfaces';

export interface IPostInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  post: ITweet;
}

export interface IPostListInterface
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  list?: ITweet[];
}
