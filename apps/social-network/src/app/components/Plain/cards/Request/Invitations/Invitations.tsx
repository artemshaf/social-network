import { Button, RequestPersonList, Card } from '@client/components/index';
import { IInvitationsIntreface } from './Invitations.intreface';

export const Invitations = ({ className, ...props }: IInvitationsIntreface) => {
  return (
    <Card wrapper className={className} {...props}>
      <div>
        <h2>Invitations</h2>
        <Button>Manage</Button>
      </div>
      <RequestPersonList />
    </Card>
  );
};

export default Invitations;
