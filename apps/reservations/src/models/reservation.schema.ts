import { AbstractDocument } from "@app/common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ versionKey: false, timestamps: true })
export class ReservationsDocument extends AbstractDocument {

    @Prop()
    startData: Date;
    @Prop()
    endData: Date;
    @Prop()
    // for a user
    userId: string;
    @Prop()
    placeId: string;
    @Prop()
    invoiceId: string
}

export const ReservationSchema = 
        SchemaFactory.createForClass(ReservationsDocument)
