import { Router } from 'express';
import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController';
import { AuthenticateUserController } from '../modules/accounts/useCases/authenticateUser/AuthenticateUserController';

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

const usersRouter = Router();

usersRouter.post('/', createUserController.handle);

usersRouter.post('/sessions', authenticateUserController.handle);

export { usersRouter };
