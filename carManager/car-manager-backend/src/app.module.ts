import { Module } from '@nestjs/common';
import { CarModule } from './car/car.module';
import { UserModule } from './user/user.module';
import { dbConfig } from './dbConfig';
@Module({
  imports: [dbConfig, CarModule, UserModule],
})
export class AppModule {}
