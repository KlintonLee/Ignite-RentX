/* eslint-disable camelcase */
class User {
  id?: string;

  name!: string;

  password!: string;

  email!: string;

  driver_license!: string;

  is_admin!: boolean;

  created_at!: Date;

  updated_at!: Date;
}

export { User };
