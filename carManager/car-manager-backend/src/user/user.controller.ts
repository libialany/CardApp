import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
// import { CreateUserDTO, UpdateUserDTO } from 'src/dto/user.dto';
import { CreateUserDTO, UpdateUserDTO } from 'src/dto/user.dto';
import { User } from 'src/entity/User';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  // @Get()
  // async getCarByColor(@Query('color') color) {
  //   return this.userService.getCarByColor(color);
  // }
  @Get('')
  async getCars(): Promise<User[]> {
    return this.userService.getAllUsers();
    // return this.userService.getAllCars();
  }
  @Get(':id')
  async getOneCar(@Param('id') uuid: string): Promise<User> {
    return this.userService.getUserById(uuid);
    // return this.userService.getCarById(uuid);
  }
  @Post()
  async postCar(@Body() request: CreateUserDTO) {
    return this.userService.postUser(request);
    // return this.userService.postCar(request);
  }
  @Delete(':id')
  async deleteCar(@Param('id') uuid: string) {
    return this.userService.deleteUserById(uuid);
    // return this.userService.deleteCarById(uuid);
  }
  // It donst work
  @Put(':id')
  async updateCar(@Param('id') uuid: string, @Body() request: UpdateUserDTO) {
    return this.userService.putCarToUserById(uuid, request);
    // return this.userService.putCarById(uuid, request);
  }
}
