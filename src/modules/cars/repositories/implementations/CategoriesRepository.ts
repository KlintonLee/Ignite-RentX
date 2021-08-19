import { Category } from '../../models/Category';
import { ICreateCategoryDTO, ICategoriesRepository } from '../ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  private categories: Array<Category>;

  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }

    return CategoriesRepository.INSTANCE;
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
