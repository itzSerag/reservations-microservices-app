import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { DatabaseModule } from '@app/common';
import { ReservationsRepository } from './reservation.repository';
import { ReservationSchema } from './models/reservation.schema';
import { LoggerModule } from '@app/common';

@Module({
  // notice we didnt touched config module
  imports: [DatabaseModule, DatabaseModule.forFeature([{

    name: ReservationsRepository.name, schema: ReservationSchema
  }]),
    // by doing this we configuring this globally (wide configurations)
    LoggerModule],
  controllers: [ReservationsController],
  providers: [ReservationsService, ReservationsRepository],
})
export class ReservationsModule { }
