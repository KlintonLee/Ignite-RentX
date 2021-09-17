/* eslint-disable camelcase */
import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUser } from '../../entities/IUser';
import { IUsersRepository } from '../IUsersRepository';

class FakeUsersRepository implements IUsersRepository {
  users: Array<IUser> = [];

  async create({ name, email, password, driverLicense: driver_license }: ICreateUserDTO): Promise<void> {
    const user = {
      id: crypto.randomBytes(2).toString('hex'),
      name,
      email,
      password: await bcrypt.hash(password, 8),
      driver_license,
      is_admin: false,
      avatar: null,
      created_at: new Date(),
      updated_at: new Date(),
    };

    this.users.push(user);
  }

  async findById(id: string): Promise<IUser | undefined> {
    const userExists = this.users.find(user => user.id === id);

    return userExists;
  }

  async findByEmail(email: string): Promise<IUser | undefined> {
    const userExists = this.users.find(user => user.email === email);

    return userExists;
  }

  async updateAvatar(id: string, avatarFile: string): Promise<void> {
    const index = this.users.findIndex(user => user.id === id);

    this.users[index] = { ...this.users[index], avatar: avatarFile };
  }
}

export { FakeUsersRepository };
