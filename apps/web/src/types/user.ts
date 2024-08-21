export interface User {
  id: number;
  name: string;
  email: string;
  roles: Role;
  profile_picture: string;
}

export enum Role {
  Admin = 'Admin',
  Customer = 'Customer',
}
