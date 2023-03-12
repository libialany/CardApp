import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entity/User';
import { Car } from 'src/entity/Car';

@Module({
  imports: [TypeOrmModule.forFeature([User,Car])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
