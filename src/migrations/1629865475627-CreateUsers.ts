import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsers1629865475627 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE users (
        id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
        name VARCHAR(50) NOT NULL,
        username VARCHAR(50) NOT NULL UNIQUE,
        password VARCHAR(150) NOT NULL,
        email VARCHAR(150) NOT NULL UNIQUE,
        driver_license VARCHAR(150) NOT NULL,
        is_admin BOOLEAN NOT NULL DEFAULT FALSE,
        created_at timestamp NOT NULL DEFAULT current_timestamp,
        updated_at timestamp NOT NULL DEFAULT current_timestamp
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE users;
    `);
  }
}
