import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class User1680781796101 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "user",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated:true,
                        generationStrategy:"increment"
                        
                    },
                    {
                        name: "firstName",
                        type: "varchar",
                    },
                    {
                        name:"lastName",
                        type: "varchar",
                    },
                    {
                        name:"age",
                        type:"int"
                    },
                    {
                        name:"profileId",
                        type:"int",
                        
                    }
                ],
            }),
            true,
        )
        await queryRunner.createForeignKey(
            'user',
            new TableForeignKey({
              columnNames: ['profileId'],
              referencedTableName: 'profile',
              referencedColumnNames: ['id'],
              onDelete:"CASCADE",
          
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
