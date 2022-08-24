import { Card } from '@client/components/Plain';
import { SuggestionItem } from '../Network/Suggestion/SuggestionItem';
import { IAccountInterface } from './Account.interface';
import './Account.scss';

export const Account = ({ className, ...props }: IAccountInterface) => {
  return (
    <Card>
      <SuggestionItem buttonVisible={false} />
      <ul>
        <li>
          <span>Who viewed your profile</span>
          <span>205</span>
        </li>
        <li>
          <span>Views of your post</span>
          <span>9,767</span>
        </li>
      </ul>
    </Card>
  );
};

export default Account;
