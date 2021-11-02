import 'reflect-metadata';
import { AppError } from '../../../../shared/errors/AppError';
import { FakeCarsRepository } from '../../repositories/fakes/FakeCarsRepository';
import { CreateCarUseCase } from './CreateCarUseCase';

let fakeCarsRepository: FakeCarsRepository;
let createCarUseCase: CreateCarUseCase;

describe('Create Car', () => {
  beforeEach(() => {
    fakeCarsRepository = new FakeCarsRepository();
    createCarUseCase = new CreateCarUseCase(fakeCarsRepository);
  });

  it('should be able to create a new car with available as true by default', async () => {
    const car = await createCarUseCase.execute({
      name: 'Car name',
      description: 'Car description',
      daily_rate: 100,
      license_plate: 'ABC-1234',
      fine_amount: 60,
      brand: 'Brand',
      category_id: 'category',
    });

    expect(car).toHaveProperty('id');
    expect(car).toHaveProperty('available');
    expect(car.available).toBe(true);
  });

  it('should not be able to create a new car with existing license plate', async () => {
    await createCarUseCase.execute({
      name: 'Car name',
      description: 'Car description',
      daily_rate: 100,
      license_plate: 'ABC-1234',
      fine_amount: 60,
      brand: 'Brand',
      category_id: 'category',
    });

    await expect(
      createCarUseCase.execute({
        name: 'Car name',
        description: 'Car description',
        daily_rate: 100,
        license_plate: 'ABC-1234',
        fine_amount: 60,
        brand: 'Brand',
        category_id: 'category',
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
