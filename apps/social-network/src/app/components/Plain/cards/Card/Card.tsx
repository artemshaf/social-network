import cn from 'classnames';
import React, { ReactComponentElement } from 'react';
import { ICardIntreface } from './Card.intreface';
import './Card.scss';

export const Card = ({
  tag = 'section',
  children,
  wrapper = false,
  className,
  ...props
}: ICardIntreface) => {
  return React.createElement(tag, {
    className: cn('card', className, {
      ['card_wrapper']: wrapper,
    }),
    children,
    ...props,
  });
};
