export enum UserRole {
  User = 'User',
  Сonfirmed = 'Сonfirmed',
}
export interface IUser {
  _id?: string;
  email: string;
  passwordHash: string;
  userRole?: UserRole;
  online?: boolean;
  ban?: boolean;
}
