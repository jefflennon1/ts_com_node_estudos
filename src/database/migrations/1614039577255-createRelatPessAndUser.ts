import {MigrationInterface, QueryRunner} from "typeorm";

export class createRelatPessAndUser1614039577255 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createForeignKey
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
