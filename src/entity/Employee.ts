import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, JoinColumn } from "typeorm"
import { Photo } from "./Photo"

@Entity()
export class Employee extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    salary: number

    @Column()
    age: number

    @OneToMany(type => Photo, project => project.emp)
    photos: Photo[]
}
