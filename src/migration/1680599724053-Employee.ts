import { ManyToMany, MigrationInterface, OneToMany, QueryRunner, Table, TableForeignKey, TableIndex } from "typeorm"
import { Photo } from "../entity/Photo"
import { Photo1680599736532 } from "./1680599736532-Photo"

export class Employee1680599724053 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "employee",
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
                    {
                        name: "salary",
                        type: "int",
                    },
                    {
                        name: "age",
                        type: "int",
                        
                    },
                    
                ],
              
            
            }),
            true,
        )


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
