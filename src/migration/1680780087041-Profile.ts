import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Profile1680780087041 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "profile",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated:true,
                        generationStrategy:"increment"
                        
                    },
                    {
                        name: "gender",
                        type: "varchar",
                    },
                    {
                        name:"post",
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
