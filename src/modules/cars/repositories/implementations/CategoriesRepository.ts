import { pool } from '../../../../common/pool-connection';
import { Category } from '../../entities/Category';
import { ICreateCategoryDTO, ICategoriesRepository } from '../ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  private static INSTANCE: CategoriesRepository;

  static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }

    return CategoriesRepository.INSTANCE;
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    await pool.query(`
      INSERT INTO categories
        (name, description)
      VALUES
        ('${name}','${description}');
    `);
  }

  async list(): Promise<Category[]> {
    const { rows } = await pool.query<Category>(`
      SELECT * FROM categories;
    `);

    return rows;
  }

  async findByName(name: string): Promise<Category | undefined> {
    const { rows } = await pool.query<Category>(`
      SELECT *
      FROM   categories
      WHERE  name = '${name}'
      LIMIT  1;
    `);

    if (rows.length > 0) {
      return rows[0];
    }

    return undefined;
  }
}

export { CategoriesRepository };
