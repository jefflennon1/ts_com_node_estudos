import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class CreateColumnPassword1612568932058 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn('testes', new TableColumn({
        name: 'password',
        type: 'varchar',
        isNullable: false,
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn('testes', 'password');
    }
}
