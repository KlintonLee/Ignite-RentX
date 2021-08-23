import { ICreateSpecificationDTO, ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  async execute({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specificationExists = await this.specificationsRepository.findByName(name);

    if (specificationExists) {
      throw new Error('Specification already exists.');
    }

    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
