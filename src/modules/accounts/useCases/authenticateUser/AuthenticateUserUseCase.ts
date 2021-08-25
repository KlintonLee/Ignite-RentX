import { injectable, inject } from 'tsyringe';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { AppError } from '../../../../errors/AppError';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const userExists = await this.usersRepository.findByEmail(email);
    if (!userExists) {
      throw new AppError('Email or password is incorrect', 401);
    }

    const matchingPasswords = await compare(password, userExists.password);
    if (!matchingPasswords) {
      throw new AppError('Email or password is incorrect', 401);
    }

    const token = sign({}, 'secret', {
      subject: userExists.id,
      expiresIn: '999d',
    });

    return {
      user: {
        name: userExists.name,
        email: userExists.email,
      },
      token,
    };
  }
}

export { AuthenticateUserUseCase };
