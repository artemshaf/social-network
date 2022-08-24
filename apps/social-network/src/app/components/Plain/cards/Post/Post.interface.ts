import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IPostInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {}

export interface IPostListInterface
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {}
