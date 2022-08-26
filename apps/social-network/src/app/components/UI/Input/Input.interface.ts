import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IInputInterface
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  width?: 'full' | 'auto';
  type?: string;
  titleText?: string;
  error?: string;
  icons?: JSX.Element;
}
