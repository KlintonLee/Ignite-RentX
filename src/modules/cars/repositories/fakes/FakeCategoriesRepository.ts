import crypto from 'crypto';
import { Category } from '../../entities/Category';
import { ICreateCategoryDTO, ICategoriesRepository } from '../ICategoriesRepository';

class FakeCategoriesRepository implements ICategoriesRepository {
  categories: Category[] = [];

  async findByName(name: string): Promise<Category | undefined> {
    const categoryExists = this.categories.find(category => {
      return category.name === name;
    });
    return categoryExists;
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = {
      id: crypto.randomBytes(1).toString('hex'),
      name,
      description,
      createdAt: new Date(),
    };
    this.categories.push(category);
  }

  async list(): Promise<Category[]> {
    return this.categories;
  }
}

export { FakeCategoriesRepository };
