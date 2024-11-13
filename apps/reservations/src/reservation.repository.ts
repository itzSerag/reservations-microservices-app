import { AbstractRepository } from "@app/common";
import { Injectable, Logger } from "@nestjs/common";
import { ReservationsDocument } from "./models/reservation.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";


@Injectable()
export class ReservationsRepository extends AbstractRepository<ReservationsDocument> {
    protected readonly logger = new Logger(ReservationsRepository.name);

    constructor(
        @InjectModel(ReservationsRepository.name) reservationsModel: Model<ReservationsDocument>
    ) {
        super(reservationsModel)
    }


    // now we have the crud operations here for reservations

}

