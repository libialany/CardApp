import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './entity/Car';
import { User } from './entity/User';
import { config } from 'dotenv';
config();

export const dbConfig = TypeOrmModule.forRoot({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: 'Cars',
  entities: [Car, User],
  synchronize: true,
});
