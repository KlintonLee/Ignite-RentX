import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateUserAvatarUseCase } from './UpdateUserAvatarUseCase';

class UpdateUserAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: userId } = request.user;
    const avatarFile = request.file?.filename as string;

    const updateAvatar = container.resolve(UpdateUserAvatarUseCase);
    await updateAvatar.execute({ userId, avatarFile });

    return response.status(204).send();
  }
}

export { UpdateUserAvatarController };
