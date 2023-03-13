import { Module } from '@nestjs/common';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from '../entity/Car';
import { User } from 'src/entity/User';

@Module({
  imports: [TypeOrmModule.forFeature([Car, User])],
  controllers: [CarController],
  providers: [CarService],
})
export class CarModule {}
