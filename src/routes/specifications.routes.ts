import { Router } from 'express';
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';
import { ensureAuthenticate } from '../modules/middlewares/ensureAuthenticate';

const createSpecificationController = new CreateSpecificationController();

const specificationsRouter = Router();

specificationsRouter.post('/', ensureAuthenticate, createSpecificationController.handle);

export { specificationsRouter };
