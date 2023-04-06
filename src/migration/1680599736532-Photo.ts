import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class Photo1680599736532 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "photo",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated:true,
                        generationStrategy: "increment"

                    },
                    {
                        name: "pic",
                        type: "varchar",
                    },
                   
                    {
                        name: "empId",
                        type: "int",
                        
                        
                    },
                   
                  
                ],
            }),

            true,
        )
        await queryRunner.createForeignKey(
            'photo',
            new TableForeignKey({
              columnNames: ['empId'],
              referencedTableName: 'employee',
              referencedColumnNames: ['id'],
              onDelete:"CASCADE",
              onUpdate:"CASCADE",
            })
          );
              
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
