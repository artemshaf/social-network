import { UserAvatar } from '@client/components/Plain';
import { Icon } from '@client/components/UI';
import { IRequestPersonInterface } from './RequestPerson.interface';

export const RequestPerson = ({
  className,
  ...props
}: IRequestPersonInterface) => {
  return (
    <li {...props}>
      <UserAvatar />
      <div>
        <h4></h4>
        <h4></h4>
        <h5>
          <Icon icon="screens" />
          <span></span>
        </h5>
      </div>
    </li>
  );
};
