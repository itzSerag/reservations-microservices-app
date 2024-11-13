import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateReservationDto {


    @IsDate()
    startData: Date;
    @IsDate()
    endData: Date;

    @IsString()
    @IsString()
    placeId: string;

    @IsString()
    @IsNotEmpty()
    invoiceId: string
}
