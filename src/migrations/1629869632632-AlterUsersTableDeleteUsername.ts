import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterUsersTableDeleteUsername1629869632632 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE
        users
      DROP COLUMN
        username;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE
        users
      ADD COLUMN
        username VARCHAR(50) NOT NULL DEFAULT '';
    `);
  }
}
