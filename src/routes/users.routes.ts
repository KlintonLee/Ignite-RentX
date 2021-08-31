import { Router } from 'express';
import multer from 'multer';
import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController';
import { AuthenticateUserController } from '../modules/accounts/useCases/authenticateUser/AuthenticateUserController';
import { UpdateUserAvatarController } from '../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController';
import { upload } from '../common/upload';
import { ensureAuthenticate } from '../modules/middlewares/ensureAuthenticate';

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

const usersRouter = Router();
const uploadAvatar = multer(upload('../tmp/avatar'));

usersRouter.post('/', createUserController.handle);

usersRouter.post('/sessions', authenticateUserController.handle);

usersRouter.patch('/avatar', ensureAuthenticate, uploadAvatar.single('avatar'), updateUserAvatarController.handle);

export { usersRouter };
