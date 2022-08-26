import { RequestPerson } from './RequestPerson';
import { IRequestPersonListInterface } from './RequestPerson.interface';

export const RequestPersonList = ({
  className,
  ...props
}: IRequestPersonListInterface) => {
  return (
    <ul>
      <RequestPerson />
    </ul>
  );
};
