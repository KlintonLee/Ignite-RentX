import { pool } from '../../../../shared/common/pool-connection';
import { Specification } from '../../entities/Specification';
import { ICreateSpecificationDTO, ISpecificationsRepository } from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    await pool.query(`
      INSERT INTO specifications
        (name, description)
      VALUES
        ('${name}', '${description}');
    `);
  }

  async findByName(name: string): Promise<Specification | undefined> {
    const { rows } = await pool.query<Specification>(`
      SELECT *
      FROM   specifications
      WHERE  name = '${name}'
      LIMIT  1;
    `);

    if (rows.length > 0) {
      return rows[0];
    }

    return undefined;
  }
}

export { SpecificationsRepository };
