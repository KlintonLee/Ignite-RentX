import { pool } from '../../../../shared/common/pool-connection';
import { IUser } from '../../entities/IUser';
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

  async findByEmail(email: string): Promise<IUser | undefined> {
    const { rows } = await pool.query<IUser>(`
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

  async findById(id: string): Promise<IUser | undefined> {
    const { rows } = await pool.query<IUser>(`
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
        avatar = '${avatarFile}',
        updated_at = NOW()
      WHERE
        id = '${id}';
    `);
  }
}

export { UsersRepository };
