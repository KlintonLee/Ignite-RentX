import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRouter = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRouter.post('/', (request, response) => {
  const { name, description } = request.body;

  const categoryAlreadyExists = categoriesRepository.findByName(name);

  if (categoryAlreadyExists) {
    return response.status(400).json({ message: 'Category already exists' });
  }

  categoriesRepository.create({ name, description });

  return response.status(201).send('ok');
});

categoriesRouter.get('/', (_, response) => {
  const categories = categoriesRepository.list();

  return response.status(200).json(categories);
});

export { categoriesRouter };
