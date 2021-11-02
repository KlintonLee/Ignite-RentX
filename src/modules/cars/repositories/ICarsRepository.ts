import { ICreateCarDTO } from '../dtos/ICreateCarDTO';
import { ICar } from '../entities/ICars';

interface ICarsRepository {
  createCar(carData: ICreateCarDTO): Promise<ICar>;
  findByLicensePlate(licencePlate: string): Promise<ICar | null>;
}

export { ICarsRepository };
