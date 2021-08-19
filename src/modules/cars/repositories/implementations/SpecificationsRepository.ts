import { Specification } from '../../models/Specification';
import { ICreateSpecificationDTO, ISpecificationsRepository } from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Array<Specification>;

  private static INSTANCE: SpecificationsRepository;

  private constructor() {
    this.specifications = [];
  }

  static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    }

    return SpecificationsRepository.INSTANCE;
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      createAt: new Date(),
    });

    this.specifications.push(specification);
  }

  findByName(name: string): Specification | undefined {
    const findSpecification = this.specifications.find(specification => specification.name === name);

    return findSpecification;
  }
}

export { SpecificationsRepository };
