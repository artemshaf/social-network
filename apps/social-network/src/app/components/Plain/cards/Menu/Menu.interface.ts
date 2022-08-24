import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IMenuInterface
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {}
