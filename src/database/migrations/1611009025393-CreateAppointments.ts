import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateAppointments1611009025393 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'appointments',
          columns:[
            {
              name: 'id',
              isPrimary: true,
              type: 'varchar',
              generationStrategy: "uuid",
              default: 'uuid_generated_v4()',
            },
            {
              name: 'provider_id',
              type: 'uuid',
              isNullable: false,
              isUnique: true,
            },
            {
              name: 'date',
              type: 'timestamp with time zone',
              isNullable: false,
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()'
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
      await queryRunner.dropTable('appointments');
    }

}
