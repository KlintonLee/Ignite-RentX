import { Request, Response } from 'express';
import { ImportCategoriesUseCase } from './ImportCategoriesUseCase';

class ImportCategoriesController {
  constructor(private importCategoriesUseCase: ImportCategoriesUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    if (file) {
      await this.importCategoriesUseCase.execute(file);
    }
    return response.send('ok');
  }
}

export { ImportCategoriesController };
