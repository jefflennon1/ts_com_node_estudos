import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class ReationTestePessoas1611962076219 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.changeColumn('pessoas', 'nome', new TableColumn({
       name: 'nome',
       type: 'varchar',
       isUnique: true,
       isNullable: true,
      }));

      await queryRunner.createForeignKey('testes', new TableForeignKey({
       name: 'Testes_pessoas',
        columnNames : ['pessoa_nome'],
        referencedColumnNames: ['nome'],
        referencedTableName : 'pessoas',
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('testes', 'Testes_pessoas');
    }

}
