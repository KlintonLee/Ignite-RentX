import { Router } from 'express';
import { carsRouter } from './cars.routes';
import { categoriesRouter } from './categories.routes';
import { specificationsRouter } from './specifications.routes';
import { usersRouter } from './users.routes';

const routes = Router();
routes.use('/cars', carsRouter);
routes.use('/categories', categoriesRouter);
routes.use('/specifications', specificationsRouter);
routes.use('/users', usersRouter);

export { routes };
