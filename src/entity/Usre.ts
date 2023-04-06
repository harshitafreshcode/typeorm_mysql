import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, JoinColumn, OneToOne } from "typeorm"
import { Photo } from "./Photo"
import { Profile } from "./Profile"

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    @OneToOne(()=>Profile)
    @JoinColumn()
    profile:Profile

    
}
