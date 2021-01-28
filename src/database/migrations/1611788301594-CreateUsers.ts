import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1611788301594 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      queryRunner.createTable(
        new Table({
          name: 'users',
          columns:[
            {
              name: 'id',
              type: 'uuid',
              generationStrategy: "uuid",
              default: 'uuid_generate_v4()',
              isUnique: true,
            },
            {
              name: 'name',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'password',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'email',
              type: 'varchar',
              isNullable: false,
              isUnique: true,
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()'
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      queryRunner.dropTable('users')
    }

}
