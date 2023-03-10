import { Module } from '@nestjs/common';
import { CarModule } from './car/car.module';
import { dbConfig } from './dbConfig';
@Module({
  imports: [dbConfig, CarModule],
})
export class AppModule {}
