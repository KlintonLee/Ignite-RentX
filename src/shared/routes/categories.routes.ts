import { Router } from 'express';
import multer from 'multer';
import { CreateCategoryController } from '../../modules/cars/useCases/createCategory/CreateCategoryController';
import { ImportCategoriesController } from '../../modules/cars/useCases/importCategories/ImportCategoriesController';
import { ListCategoriesController } from '../../modules/cars/useCases/listCategories/ListCategoriesController';

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();
const importCategoriesController = new ImportCategoriesController();

const categoriesRouter = Router();
const upload = multer({
  dest: './tmp',
});

categoriesRouter.post('/', createCategoryController.handle);
categoriesRouter.get('/', listCategoriesController.handle);

categoriesRouter.post('/import', upload.single('file'), importCategoriesController.handle);

export { categoriesRouter };
