import { ICreateCategoryDTO, ICreateCategoryRepository } from '../repositories/ICategoriesRepository';

class CreateCategoryService {
  constructor(private categoriesRepository: ICreateCategoryRepository) {}

  execute({ name, description }: ICreateCategoryDTO): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Category already exists.');
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
