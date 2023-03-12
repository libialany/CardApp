// import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import {  Entity,  JoinColumn,  OneToOne,  Column,  PrimaryGeneratedColumn } from 'typeorm';
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

  @OneToOne(() => Car)
  @JoinColumn()
  car: Car;
}
