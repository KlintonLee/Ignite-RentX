import crypto from 'crypto';
import { ICreateCarDTO } from '../../dtos/ICreateCarDTO';
import { ICar } from '../../entities/ICars';
import { ICarsRepository } from '../ICarsRepository';

class FakeCarsRepository implements ICarsRepository {
  private cars: Array<ICar> = [];

  async createCar(carData: ICreateCarDTO): Promise<ICar> {
    const car = {
      id: crypto.randomBytes(1).toString('hex'),
      ...carData,
      available: true,
      created_at: new Date(),
    };

    this.cars.push(car);

    return car;
  }

  async findByLicensePlate(licencePlate: string): Promise<ICar | null> {
    const carExists = this.cars.find(car => car.license_plate === licencePlate);

    if (carExists) {
      return carExists;
    }

    return null;
  }
}

export { FakeCarsRepository };
