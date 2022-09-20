import { Button } from '@client/components/UI';
import { Card } from '@client/components';
import { ISuggestionInterface } from './Suggestion.interface';
import { SuggestionItem } from './SuggestionItem';

export const SuggestionList = ({
  className,
  ...props
}: ISuggestionInterface) => {
  return (
    <Card wrapper>
      <div>
        <h1>People you may know</h1>
        <Button>See all</Button>
      </div>
      <ul className={className} {...props}>
        <SuggestionItem />
      </ul>
    </Card>
  );
};
