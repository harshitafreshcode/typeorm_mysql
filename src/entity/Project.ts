import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, JoinColumn, ManyToMany, JoinTable } from "typeorm"
import { Photo } from "./Photo"
import { Employee } from "./Employee"

@Entity()
export class Project extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    projectName:String   

    @ManyToMany(()=>Employee)
    @JoinTable()
    employees: Employee[]
    
}
