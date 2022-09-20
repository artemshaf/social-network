import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IMusicListItemInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  item: unknown;
}
