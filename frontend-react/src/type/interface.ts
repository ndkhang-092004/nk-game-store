export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
}

export interface User {
  id: number;
  email: string;
  name: string;
  role: Role;
  phoneNumber: string;
}
