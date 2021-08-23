import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCategories1629602063458 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE categories (
        id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
        name VARCHAR(50) NOT NULL,
        description VARCHAR(150) NOT NULL,
        created_at timestamp NOT NULL DEFAULT current_timestamp,
        updated_at timestamp NOT NULL DEFAULT current_timestamp
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE categories;
    `);
  }
}
