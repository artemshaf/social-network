import { UserAvatar } from '@client/components/Plain';
import { Button, Icon } from '@client/components/UI';
import { IRequestPersonInterface } from './RequestPerson.interface';

export const RequestPerson = ({
  className,
  ...props
}: IRequestPersonInterface) => {
  return (
    <li {...props}>
      <UserAvatar />
      <div>
        <h4>Vladimir Lupinskiy</h4>
        <h4>UI/UX designer - Celadon</h4>
        <h5>
          <Icon icon="screens" />
          <span>Tatsiana Zhukouskaya and 810 others</span>
        </h5>
      </div>
    </li>
  );
};
