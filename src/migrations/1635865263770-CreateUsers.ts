import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsers1635865263770 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE cars (
        id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
        name VARCHAR(50) NOT NULL,
        description VARCHAR(150) NOT NULL,
        daily_rate NUMERIC(5, 2) NOT NULL,
        available BOOLEAN NOT NULL DEFAULT true,
        license_plate VARCHAR(10) NOT NULL,
        fine_amount NUMERIC(5, 2) NOT NULL,
        brand VARCHAR(20) NOT NULL,
        category_id UUID NOT NULL
          REFERENCES categories(id)
          ON DELETE SET NULL
          ON UPDATE SET NULL,
        created_at timestamp NOT NULL DEFAULT current_timestamp,
        updated_at timestamp NOT NULL DEFAULT current_timestamp
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('cars');
  }
}
