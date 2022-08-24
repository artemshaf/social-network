import { Card, UserAvatar } from '@client/components/Plain';
import { Button, Icon } from '@client/components/UI';
import { ISuggestionItemInterface } from './Suggestion.interface';
import DefaultSuggestion from '../../../../../../assets/suggestion/default-suggestion.png';

export const SuggestionItem = ({
  buttonVisible = true,
  className,
  ...props
}: ISuggestionItemInterface) => {
  return (
    <Card tag="li" className={className} {...props}>
      <Icon icon="close" />
      <img src={DefaultSuggestion} />
      <UserAvatar />
      <h2></h2>
      <h3></h3>
      <h4></h4>
      {buttonVisible ? <Button>Accept</Button> : <></>}
    </Card>
  );
};
