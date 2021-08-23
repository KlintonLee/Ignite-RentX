import { Category } from '../entities/Category';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  create(data: ICreateCategoryDTO): Promise<void>;
  list(): Promise<Category[]>;
  findByName(name: string): Promise<Category | undefined>;
}

export { ICreateCategoryDTO, ICategoriesRepository };
