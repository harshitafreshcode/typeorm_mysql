import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class Question1680773403265 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "question",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated:true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "title",
                        type: "varchar",
                    },
                    {
                        name: "text",
                        type: "varchar",
                        
                    },
                   
                   
                  
                ],
            }),

            true,
        )
        await queryRunner.createForeignKey(
            'question',
            new TableForeignKey({
              columnNames: ['id'],
              referencedTableName: 'category',
              referencedColumnNames: ['id'],
              onDelete:"CASCADE",
              
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
