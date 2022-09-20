import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IProfileUser } from '@social-network/interfaces';

export interface IFeedListInterface
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  list?: IProfileUser[];
}

export interface IFeedInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  item: IProfileUser;
}
