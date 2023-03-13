import { Injectable } from '@nestjs/common';
import { InjectRepository, InjectEntityManager } from '@nestjs/typeorm';
import { CreateCarDTO } from 'src/dto/car.dto';
import { Car } from 'src/entity/Car';
import { User } from 'src/entity/User';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car)
    private carsRepository: Repository<Car>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectEntityManager() private carManager: EntityManager,
  ) {}
  public async getAllCarsOfUser() {
    const result = await this.carManager
      .getRepository(User)
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.cars', 'cars')
      .getMany();
    // console.log(result);
    return result;
  }
  public async getAllCars(): Promise<Car[]> {
    return this.carsRepository.find();
  }

  public async getCarById(uuid: string): Promise<Car> {
    const car = this.carsRepository.findOneBy({ uuid });
    if (!car) throw new Error('Car not found');
    return car;
  }

  public async deleteCarById(uuid: string): Promise<void> {
    await this.carsRepository.delete(uuid);
  }

  public async postCar(car: CreateCarDTO): Promise<Car> {
    const user = await this.userRepository.findOneBy({ uuid: car.userUuid });
    if (!user) throw new Error('User not found');
    const newCar = new Car();
    newCar.name = car.name;
    newCar.model = car.model;
    newCar.color = car.color;
    newCar.description = car.description;
    newCar.user = user;
    return this.carsRepository.save(newCar);
  }

  public async putCarById(uuid: string, car: Partial<Car>) {
    const myCar = await this.getCarById(uuid);
    if (!myCar) throw new Error('Car not found');
    myCar.name = car.name;
    myCar.model = car.model;
    myCar.color = car.color;
    myCar.description = car.description;

    return this.carsRepository.save(myCar);
  }

  public async getCarByColor(color: string): Promise<Car[]> {
    const cars = this.carsRepository.find({ where: { color } });
    return cars;
  }
}
