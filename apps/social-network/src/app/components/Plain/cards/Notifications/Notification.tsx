import { UserAvatar, Card } from '@client/components/Plain';
import { Icon } from '@client/components/UI';
import { INotificationIntreface } from './Notifications.intreface';

export const Notification = ({
  className,
  ...props
}: INotificationIntreface) => {
  return (
    <li className={className} {...props}>
      <Card>
        <div>
          <UserAvatar size="lg" />
          <h2>
            .... <b>liked you post</b>
          </h2>
          <h4>55m ago(time)</h4>
          <Icon icon="more" />
        </div>
        <div>
          <p>
            Id malesuada cursus felis, neque. Eu ullamcorper lorem lacus aenean
            sit. Fringilla purus ornare at orci mauris, et dictum. Risus nulla
            consectetur mollis eget amet. Sollicitudin vel aliquet pellentesque
            dolor nunc sit tellus. Sit nunc id maecenas tellus interdum mauris
            enim. Dui lobortis tellus, tincidunt in non aliquam integer maecenas
            nullam.
          </p>
          <p>LinkedIn redesign concept</p>
        </div>
        <ul>
          <li>27 Reactions</li>
          <li>11 Comments</li>
        </ul>
      </Card>
    </li>
  );
};

export default Notification;
