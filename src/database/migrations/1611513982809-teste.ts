import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class teste1611513982809 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      queryRunner.createTable(
        new Table({
          name: 'testes',
          columns:[
            {
              name: 'id',
              type: 'varchar',
              generationStrategy: "uuid",
              default: 'uuid_generate_v4()'
            },
            {
              name: 'pessoa_nome',
              type: "varchar",
              isNullable: false,
          },
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      queryRunner.dropTable('testes');
    }

}
