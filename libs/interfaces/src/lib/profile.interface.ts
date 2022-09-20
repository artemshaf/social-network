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
  location?: {
    city: string;
    country: string;
  };
  status?: string;
  phone?: string;
}
