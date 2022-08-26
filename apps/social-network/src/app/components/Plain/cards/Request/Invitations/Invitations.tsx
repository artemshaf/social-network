import { Button, RequestPersonList } from '@client/components/index';
import { IInvitationsIntreface } from './Invitations.intreface';

export const Invitations = ({ className, ...props }: IInvitationsIntreface) => {
  return (
    <section className={className} {...props}>
      <div>
        <h2>Invitations</h2>
        <Button>Manage</Button>
      </div>
      <RequestPersonList />
    </section>
  );
};

export default Invitations;
