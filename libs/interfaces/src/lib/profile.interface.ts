export enum userSex {
  Men = 'Men',
  Women = 'Women',
}

export interface IUserLocation {
  city: string;
  country: string;
}

export interface IProfileUser {
  name: string;
  surname: string;
  photos?: string[];
  sex?: userSex;
  bdate?: Date;
  location?: IUserLocation;
  status?: string;
  phone?: string;
}
