import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IProfilePageInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  userId?: string;
}
