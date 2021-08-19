import { Category } from '../models/Category';
import { ICreateCategoryDTO, ICreateCategoryRepository } from './ICategoriesRepository';

class CategoriesRepository implements ICreateCategoryRepository {
  private categories: Array<Category>;

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();
    Object.assign(category, {
      name,
      description,
      createdAt: new Date(),
    });

    this.categories.push(category);
  }

  list(): Array<Category> {
    return this.categories;
  }

  findByName(name: string): Category | undefined {
    const category = this.categories.find(item => item.name === name);

    return category;
  }
}

export { CategoriesRepository };
