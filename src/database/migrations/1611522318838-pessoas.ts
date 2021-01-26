import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class pessoas1611522318838 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      queryRunner.createTable(
        new Table ({
          name: 'pessoas',
          columns :[
              {
                name: "nome",
                type: "varchar",
                isNullable: false,
              },
              {
                name: "sobrenome",
                type: "varchar",
                isNullable: false,
              },
              {
                name: "idade",
                type: "int",
                isNullable: false,
              },
              {
                name: "id",
                type: "varchar",
                generationStrategy: "uuid",
                default: "uuid_generate_v4()"
              }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      queryRunner.dropTable('pessoas');
    }

}
