import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn } from "typeorm"
import { User } from "./Usre"
import { Employee } from "./Employee"

@Entity()
export class Photo extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    pic: string

    @ManyToOne(type => Employee,employee=>employee.photos,{
        onDelete:"CASCADE",
        onUpdate:"CASCADE"
    })
    emp :Employee   
   
}
