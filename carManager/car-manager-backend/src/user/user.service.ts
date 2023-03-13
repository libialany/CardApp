import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDTO, UpdateUserDTO } from 'src/dto/user.dto';
import { User } from 'src/entity/User';
import { Repository } from 'typeorm';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
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

  public async postUser(user: CreateUserDTO): Promise<User> {
    const newUser = new User();
    newUser.nombre = user.nombre;
    newUser.edad = user.edad;
    newUser.apellidoM = user.apellidoM;
    newUser.apellidoP = user.apellidoP;
    return this.usersRepository.save(newUser);
  }
  public async putUserById(id: string, request: UpdateUserDTO) {
    return this.usersRepository.update(id, request);
  }
  // public async assignCarToUser(reques:AssignCarToUserDTO) {
  //   const myCar = await this.carsRepository.findOneBy({uuid:reques.uuidCar});
  //   if (!myCar) throw new Error('Car not found');
  //   const myUser = await this.usersRepository.findOneBy({uuid:reques.uuidUser});
  //   if (!myUser) throw new Error('User not found');
  //   const newUser = new User()
  //   const newCar  = new Car()
  //   newCar.uuid =  reques.uuidCar
  //   newUser.car = newCar
  //   return this.usersRepository.update(reques.uuidUser,newUser);
  // }
}
