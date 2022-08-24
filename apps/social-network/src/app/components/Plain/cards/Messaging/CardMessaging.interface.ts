import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IUserMessage {
  user: {
    img: string;
    name: string;
  };
  text: string;
}

export interface ICardMessagingInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  message: IUserMessage;
}
export interface ICardListMessagingInterface
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  messages?: IUserMessage[];
}
