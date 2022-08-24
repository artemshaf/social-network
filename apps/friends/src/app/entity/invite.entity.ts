import { IInvite, InviteStatus } from '@social-network/interfaces';

export class InviteEntity implements IInvite {
  id: string;
  from: string;
  to: string;
  inviteStatus: InviteStatus;
}
