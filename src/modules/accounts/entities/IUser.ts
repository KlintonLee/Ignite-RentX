/* eslint-disable camelcase */
interface IUser {
  id?: string;

  name: string;

  password: string;

  email: string;

  driver_license: string;

  is_admin: boolean;

  avatar: string | null;

  created_at: Date;

  updated_at: Date;
}

export { IUser };
