import { NestFactory } from '@nestjs/core';
import { ReservationsModule } from './reservations.module';
import * as dotenv from "dotenv"
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { log } from 'console';
dotenv.config()

async function bootstrap() {
  const app = await NestFactory.create(ReservationsModule);

  log(process.env.TZ[0])

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true
  }))

  app.useLogger(app.get(Logger))

  await app.listen(process.env.port || 3000);
}
bootstrap();
