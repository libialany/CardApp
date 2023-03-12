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
import { CreateUserDTO, AssignCarToUserDTO } from 'src/dto/user.dto';
import { User } from 'src/entity/User';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
    // return this.userService.getAllUsers();
  }
  @Get(':id')
  async getOneUser(@Param('id') uuid: string): Promise<User> {
    return this.userService.getUserById(uuid);
    // return this.userService.getUserById(uuid);
  }
  @Post('create')
  async postUser(@Body() request: CreateUserDTO) {
    return this.userService.postUser(request);
    // return this.userService.postUser(request);
  }
  @Delete(':id')
  async deleteUser(@Param('id') uuid: string) {
    return this.userService.deleteUserById(uuid);
    // return this.userService.deleteUserById(uuid);
  }
  // 
  @Put('asignar')
  async updateUser(@Body() request: AssignCarToUserDTO ) {
    return this.userService.assignCarToUser(request);
    // return this.userService.putUserById(uuid, request);
  }
}
