import { pool } from '../../../../shared/common/pool-connection';
import { ICreateCarDTO } from '../../dtos/ICreateCarDTO';
import { ICar } from '../../entities/ICars';
import { ICarsRepository } from '../ICarsRepository';

class CarsRepository implements ICarsRepository {
  async createCar({
    name,
    description,
    daily_rate,
    license_plate,
    fine_amount,
    brand,
    category_id,
  }: ICreateCarDTO): Promise<ICar> {
    // eslint-disable-next-line prettier/prettier
    await pool.query({
      text: `
      INSERT INTO cars
      (name, description, daily_rate, license_plate, fine_amount, brand, category_id)
      VALUES
      ($1, $2, $3, $4, $5, $6, $7);
      `,
      values: [name, description, daily_rate, license_plate, fine_amount, brand, category_id],
    });

    const { rows } = await pool.query(`
      SELECT * FROM cars WHERE license_plate = '${license_plate}'
    `);

    return rows[0];
  }

  async findByLicensePlate(licensePlate: string): Promise<ICar | null> {
    const { rows } = await pool.query(`
      SELECT * FROM cars WHERE license_plate = '${licensePlate}'
    `);

    if (rows.length > 0) {
      return rows[0];
    }

    return null;
  }
}

export { CarsRepository };
