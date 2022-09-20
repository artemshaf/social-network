import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IMusicListInterface
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  items: unknown[];
}
