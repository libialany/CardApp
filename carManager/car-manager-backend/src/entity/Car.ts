import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './User';
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

  @ManyToOne(() => User, (user) => user.cars)
  user: User;
}
