import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ICardIntreface
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  tag?: string;
}
