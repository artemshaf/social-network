import {
  IProfileUser,
  IUserLocation,
  userSex,
} from '@social-network/interfaces';

export class ProfileDto implements IProfileUser {
  name: string;
  surname: string;
  sex?: userSex;
  bdate?: Date;
  location?: IUserLocation;
  status?: string;
  phone?: string;

  constructor(profile: IProfileUser) {
    this.name = profile.name;
    this.surname = profile.surname;
    this.sex = profile.sex;
    this.bdate = profile.bdate;
    this.location = profile.location;
    this.status = profile.status;
    this.phone = profile.phone;
  }
}
