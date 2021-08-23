/* eslint-disable no-undef */
import fs from 'fs';
import csvParse from 'csv-parse';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IImportCategory {
  name: string;
  description: string;
}

class ImportCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  private async loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    const categories: Array<IImportCategory> = [];

    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);

      const parseFile = csvParse();

      stream.pipe(parseFile);

      parseFile
        .on('data', line => {
          const [name, description] = line;

          categories.push({ name, description });
        })
        .on('end', () => {
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on('error', error => reject(error));
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    Promise.all(
      categories.map(async category => {
        const categoryExists = await this.categoriesRepository.findByName(category.name);

        if (!categoryExists) {
          this.categoriesRepository.create(category);
        }

        return null;
      })
    );
  }
}

export { ImportCategoriesUseCase };
