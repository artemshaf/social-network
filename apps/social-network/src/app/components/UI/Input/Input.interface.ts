import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IInputInterface
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  type?: string;
}
