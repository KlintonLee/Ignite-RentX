/* eslint-disable no-param-reassign */
import { inject, injectable } from 'tsyringe';
import bcrypt from 'bcryptjs';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { UsersRepository } from '../../repositories/implementations/UsersRepository';
import { AppError } from '../../../../shared/errors/AppError';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: UsersRepository
  ) {}

  async execute(userData: ICreateUserDTO): Promise<void> {
    const userExists = await this.usersRepository.findByEmail(userData.email);
    if (userExists) {
      throw new AppError('User already exists');
    }

    userData.password = await bcrypt.hash(userData.password, 8);

    await this.usersRepository.create(userData);
  }
}

export { CreateUserUseCase };
