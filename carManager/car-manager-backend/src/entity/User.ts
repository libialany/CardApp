import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Car } from './Car';
@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ default: '' })
  nombre: string;

  @Column({ default: 0 })
  edad: number;

  @Column({ default: '' })
  apellidoM: string;

  @Column({ default: '' })
  apellidoP: string;

  @OneToMany(() => Car, (car) => car.user)
  cars: Car[];
}
