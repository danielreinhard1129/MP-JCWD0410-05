export interface User {
  id: number;
  name: string;
  email: string;
  roles: Role;
}

export enum Role {
  Admin = 'Admin',
  Customer = 'Customer',
}
