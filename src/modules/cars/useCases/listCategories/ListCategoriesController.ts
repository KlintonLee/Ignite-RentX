import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCategoriesController {
  async handle(_: Request, response: Response): Promise<Response> {
    const listCategories = container.resolve(ListCategoriesUseCase);

    const categories = await listCategories.execute();

    return response.json(categories);
  }
}

export { ListCategoriesController };
