export interface User {
  id: number;
  name: string;
  email: string;
  roles: Role;
}

enum Role {
  Admin,
  Customer,
}
