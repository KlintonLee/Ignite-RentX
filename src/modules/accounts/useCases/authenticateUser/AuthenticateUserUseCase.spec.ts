import 'reflect-metadata';
import { AppError } from '../../../../shared/errors/AppError';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';
import { FakeUsersRepository } from '../../repositories/fakes/FakeUsersRepository';

let usersRepository: FakeUsersRepository;
let authenticateUser: AuthenticateUserUseCase;
describe('AuthenticateUserUseCase.test.ts', () => {
  beforeEach(() => {
    usersRepository = new FakeUsersRepository();
    authenticateUser = new AuthenticateUserUseCase(usersRepository);
  });

  it(`Given an existing user account and pass correct email and password
      When call execute from AuthenticateUserUseCase
      Then return a token property`, async () => {
    await usersRepository.create({
      name: 'John Doe',
      password: '123456',
      email: 'john.doe@email.com',
      driverLicense: '00123456789',
    });

    const response = await authenticateUser.execute({
      email: 'john.doe@email.com',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
  });

  it(`Given an non-existing user to be authenticated
      When call execute method from AuthenticateUserUseCase
      Then throws an instance of AppError`, async () => {
    await expect(
      authenticateUser.execute({
        email: 'non-existing@email.com',
        password: '123456',
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it(`Given an existing user account, but with wrong password
      When call execute from AuthenticateUserUseCase
      Then throws an instance of AppError`, async () => {
    await usersRepository.create({
      name: 'John Doe',
      password: '123456',
      email: 'john.doe@email.com',
      driverLicense: '00123456789',
    });

    await expect(
      authenticateUser.execute({
        email: 'john.doe@email.com',
        password: 'non-existing',
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
