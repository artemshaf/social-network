import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IUserAvatarInterface
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
}
