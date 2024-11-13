import { Injectable } from '@nestjs/common';
import { CreateReservationDto, UpdateReservationDto } from './dto';
import { ReservationsRepository } from './reservation.repository';

@Injectable()
export class ReservationsService {

  constructor(private readonly reservationsRepository: ReservationsRepository) { }
  create(createReservationDto: CreateReservationDto) {
    return this.reservationsRepository.create({
      ...createReservationDto,
      userId: "123"
    })

  }

  findAll() {
    return this.reservationsRepository.find({})
  }

  findOne(_id: string) {
    return this.reservationsRepository.findOne({ _id });
  }

  update(_id: string, updateReservationDto: UpdateReservationDto) {
    return this.reservationsRepository.findOneAndUpdate(

      { _id },
      // totally safe update obj is partial of create obj
      { $set: updateReservationDto }

    )
  }

  remove(_id: string) {
    return this.reservationsRepository.findOneAndDelete({ _id })
  }
}