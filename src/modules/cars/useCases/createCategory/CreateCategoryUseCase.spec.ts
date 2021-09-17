import 'reflect-metadata';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';
import { FakeCategoriesRepository } from '../../repositories/fakes/FakeCategoriesRepository';
import { AppError } from '../../../../shared/errors/AppError';

let categoriesRepository: FakeCategoriesRepository;
let createCategory: CreateCategoryUseCase;
describe('CreateCategoryUseCase.test.ts', () => {
  beforeEach(() => {
    categoriesRepository = new FakeCategoriesRepository();
    createCategory = new CreateCategoryUseCase(categoriesRepository);
  });

  it(`Given and obj containing: {
        "name": "SUV",
        "description": "combines elements of road-going passenger cars with
          features from off-road vehicles"
        }
      When call execute(obj) from class CreateCategoryUseCase
      Then should be able to create a new category and create method from
        FakeCategoriesRepository must be called with the obj mentioned above`, async () => {
    const createCategorySpy = jest.spyOn(categoriesRepository, 'create');

    await createCategory.execute({
      name: 'SUV',
      description: 'combines elements of road-going passenger cars with features from off-road vehicles',
    });

    const category = await categoriesRepository.findByName('SUV');

    expect(category).toHaveProperty('id');
    expect(createCategorySpy).toBeCalledWith({
      name: 'SUV',
      description: 'combines elements of road-going passenger cars with features from off-road vehicles',
    });
  });

  it(`Given and obj with the name already created: {
        "name": "SUV",
        "description": "combines elements of road-going passenger cars with
          features from off-road vehicles"
        }
      When call execute(obj) from class CreateCategoryUseCase
      Then throws an error containing "Category already exists." `, async () => {
    await categoriesRepository.create({
      name: 'SUV',
      description: 'combines elements of road-going passenger cars with features from off-road vehicles',
    });

    await expect(
      createCategory.execute({
        name: 'SUV',
        description: 'combines elements of road-going passenger cars with features from off-road vehicles',
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
