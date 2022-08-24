import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ISuggestionItemInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  buttonVisible?: boolean;
}

export interface ISuggestionInterface
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {}
