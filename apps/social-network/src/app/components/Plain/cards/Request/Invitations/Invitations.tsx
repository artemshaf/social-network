import { IInvitationsIntreface } from './Invitations.intreface';

export const Invitations = ({ className, ...props }: IInvitationsIntreface) => {
  return (
    <section className={className} {...props}>
      <div>
        <h2>Invitations</h2>
        <h2>Manage</h2>
      </div>
    </section>
  );
};

export default Invitations;
