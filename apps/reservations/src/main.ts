import { NestFactory } from '@nestjs/core';
import { ReservationsModule } from './reservations.module';
import * as dotenv from "dotenv"
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
dotenv.config()

async function bootstrap() {
  const app = await NestFactory.create(ReservationsModule);

  app.useGlobalPipes(new ValidationPipe())

  app.useLogger(app.get(Logger))

  await app.listen(process.env.port || 3000);
}
bootstrap();
