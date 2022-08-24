import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IFeedListInterface
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {}

export interface IFeedInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {}
