import { Router } from 'express';
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';

const createSpecificationController = new CreateSpecificationController();

const specificationsRouter = Router();

specificationsRouter.post('/', createSpecificationController.handle);

export { specificationsRouter };
