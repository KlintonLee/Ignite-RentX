import { ICreateCategoryDTO, ICategoriesRepository } from '../../repositories/ICategoriesRepository';

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute({ name, description }: ICreateCategoryDTO): Promise<void> {
    const categoryExists = await this.categoriesRepository.findByName(name);

    if (categoryExists) {
      throw new Error('Category already exists.');
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
