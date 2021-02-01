import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class ChangeProviderToProviderId1611871244412 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

      await queryRunner.createForeignKey('appointments', new TableForeignKey({
        name: 'AppointmentsProvider',
        columnNames: ['provider_id'],
        referencedColumnNames:['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('appointments',  'AppointmentsProvider');
      await queryRunner.dropColumn('appointments','provider_id');

    }

}
