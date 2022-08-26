import { Card } from '@client/components/index';
import { MessagePerson } from './MessagePerson';
import { IMessagePersonListInterface } from './MessagePerson.interface';

export const MessagePersonList = ({
  className,
  ...props
}: IMessagePersonListInterface) => {
  return (
    <Card tag="ul" {...props}>
      <MessagePerson />
    </Card>
  );
};
