import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Category1680773392048 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "category",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated:true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                  
                   
                  
                ],
            }),

            true,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
