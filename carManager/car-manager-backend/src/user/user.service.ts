import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from 'src/entity/Car';
import { User } from 'src/entity/User';
import { Repository } from 'typeorm';
import { CarService } from '../car/car.service';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Car)
    private carsRepository: Repository<Car>,
  ) {}

  public async getAllUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }

  public async getUserById(uuid: string): Promise<User> {
    const car = this.usersRepository.findOneBy({ uuid });
    if (!car) throw new Error('Car not found');
    return car;
  }

  public async deleteUserById(uuid: string): Promise<void> {
    await this.usersRepository.delete(uuid);
  }

  public async postUser(car: Partial<User>): Promise<User> {
    return this.usersRepository.save(car);
  }

  public async putCarToUserById(uuid: string, user: Partial<User>) {
    const myCar = await this.carsRepository.findOneBy({ uuid });
    if (!myCar) throw new Error('Car not found');
    user.car = myCar;
    return this.usersRepository.save(user);
  }

  // public async getCarByColor(color: string): Promise<Car[]> {
  //   const cars = this.usersRepository.find({ where: { color } });
  //   return cars;
  // }
}
