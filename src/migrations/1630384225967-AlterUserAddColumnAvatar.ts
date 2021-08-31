import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterUserAddColumnAvatar1630384225967 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE
        users
      ADD COLUMN
        avatar VARCHAR(255) DEFAULT NULL;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE
        users
      DROP COLUMN
        avatar;
    `);
  }
}
