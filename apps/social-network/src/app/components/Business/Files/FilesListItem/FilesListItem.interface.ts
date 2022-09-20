import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IFilesListItemInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  item: unknown;
}
