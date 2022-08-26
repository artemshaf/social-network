import { Card } from '@client/components/Plain';
import cn from 'classnames';
import { SuggestionItem } from '../Network/Suggestion/SuggestionItem';
import { IAccountInterface } from './Account.interface';
import './Account.scss';

export const Account = ({ className, ...props }: IAccountInterface) => {
  return (
    <Card tag="section" className={cn(className, 'account-card')} {...props}>
      <SuggestionItem buttonVisible={false} style={{ padding: '0' }} />
      <ul className="account-card__list">
        <li className="account-card__list-item">
          <span>Who viewed your profile</span>
          <span>205</span>
        </li>
        <li className="account-card__list-item">
          <span>Views of your post</span>
          <span>9,767</span>
        </li>
      </ul>
    </Card>
  );
};

export default Account;
