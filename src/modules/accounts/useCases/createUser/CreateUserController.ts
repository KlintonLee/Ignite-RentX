import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, password, email, driverLicense } = request.body;

    const createUser = container.resolve(CreateUserUseCase);

    await createUser.execute({
      name,
      password,
      email,
      driverLicense,
    });

    return response.status(201).send('ok');
  }
}

export { CreateUserController };
