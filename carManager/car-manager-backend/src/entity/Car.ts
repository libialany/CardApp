import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'cars' })
export class Car {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ default: '' })
  name: string;

  @Column({ default: '' })
  model: string;

  @Column({ default: '' })
  color: string;

  @Column({ default: '' })
  description: string;
}
