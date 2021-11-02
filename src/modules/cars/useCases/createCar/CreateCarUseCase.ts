import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';
import { ICreateCarDTO } from '../../dtos/ICreateCarDTO';
import { ICar } from '../../entities/ICars';
import { ICarsRepository } from '../../repositories/ICarsRepository';

@injectable()
class CreateCarUseCase {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository
  ) {}

  async execute(carData: ICreateCarDTO): Promise<ICar> {
    const carAlreadyExists = await this.carsRepository.findByLicensePlate(carData.license_plate);

    if (carAlreadyExists) {
      throw new AppError('Car already exists');
    }

    const car = await this.carsRepository.createCar(carData);

    return car;
  }
}

export { CreateCarUseCase };
