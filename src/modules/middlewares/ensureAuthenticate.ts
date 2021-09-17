import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from '../../shared/errors/AppError';
import { UsersRepository } from '../accounts/repositories/implementations/UsersRepository';

interface IPayload {
  sub: string;
}

const ensureAuthenticate = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token is missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: userId } = verify(token, 'secret') as IPayload;

    const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(userId);
    if (!user) {
      throw new AppError('User was not found');
    }

    request.user = {
      id: userId,
    };

    next();
  } catch {
    throw new AppError('Invalid token', 401);
  }
};

export { ensureAuthenticate };
