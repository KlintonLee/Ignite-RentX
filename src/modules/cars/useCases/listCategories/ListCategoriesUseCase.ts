import { Category } from '../../models/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(): Array<Category> {
    return this.categoriesRepository.list();
  }
}

export { ListCategoriesUseCase };
