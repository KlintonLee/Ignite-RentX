import { pool } from '../../../../common/pool-connection';
import { User } from '../../entities/User';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
  async create({ name, password, email, driverLicense, isAdmin = false }: ICreateUserDTO): Promise<void> {
    await pool.query(`
      INSERT INTO users
        (name, password, email, driver_license, is_admin)
      VALUES
        ('${name}', '${password}', '${email}', '${driverLicense}', ${isAdmin});
    `);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const { rows } = await pool.query<User>(`
      SELECT
        driver_license AS driverLicense,
        is_admin AS isAdmin,
        u.*
      FROM
        users u
      WHERE
        email = '${email}';
    `);

    return rows[0];
  }

  async findById(id: string): Promise<User | undefined> {
    const { rows } = await pool.query<User>(`
      SELECT
        driver_license AS driverLicense,
        is_admin AS isAdmin,
        u.*
      FROM
        users u
      WHERE u.id = '${id}';
    `);

    return rows[0];
  }

  async updateAvatar(id: string, avatarFile: string): Promise<void> {
    await pool.query(`
      UPDATE
        users
      SET
        avatar = '${avatarFile}'
      WHERE
        id = '${id}';
    `);
  }
}

export { UsersRepository };
