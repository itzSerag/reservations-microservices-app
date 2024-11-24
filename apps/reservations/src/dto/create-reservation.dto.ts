import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateReservationDto {


    @IsDate()
    // This from class transformer which transform the incoming obj to types
    // Just specify which Obj u want
    @Type(() => Date)
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
