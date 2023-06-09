export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  salt: string;
}

export interface IUserInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  salt?: string;
  phone?: string;
}
