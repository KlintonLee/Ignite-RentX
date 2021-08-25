/* eslint-disable camelcase */
interface ICreateUserDTO {
  name: string;
  password: string;
  email: string;
  driverLicense: string;
  isAdmin?: boolean;
}

export { ICreateUserDTO };
