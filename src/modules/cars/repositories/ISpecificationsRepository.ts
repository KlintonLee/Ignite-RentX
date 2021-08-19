import { Specification } from '../models/Specification';

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create(data: ICreateSpecificationDTO): void;
  findByName(name: string): Specification | undefined;
}

export { ICreateSpecificationDTO, ISpecificationsRepository };
