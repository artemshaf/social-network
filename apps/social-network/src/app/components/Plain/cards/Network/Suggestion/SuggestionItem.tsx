import { Card, UserAvatar } from '@client/components/Plain';
import { Button, Icon } from '@client/components/UI';
import { ISuggestionItemInterface } from './Suggestion.interface';
import DefaultSuggestion from '../../../../../../assets/suggestion/default-suggestion.png';
import './Suggestion.scss';
import cn from 'classnames';

export const SuggestionItem = ({
  buttonVisible = true,
  className,
  ...props
}: ISuggestionItemInterface) => {
  return (
    <Card tag="li" className={cn(className, 'suggestion')} {...props}>
      <div className="suggestion__img__container">
        <Icon icon="close" className="suggestion__close" />
        <img src={DefaultSuggestion} className="suggestion__img" />
      </div>
      <UserAvatar className="suggestion__avatar" size="md" />
      <h2></h2>
      <h3></h3>
      <h4></h4>
      {buttonVisible ? <Button>Accept</Button> : <></>}
    </Card>
  );
};
