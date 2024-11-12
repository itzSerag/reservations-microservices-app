import { Prop, Schema } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';

@Schema()
export class AbstractDocument {

    // SchemaTypes.ObjectId used for specifing ObjectId in Props
    @Prop({ type: SchemaTypes.ObjectId })

    // used for direct handling for Types
    _id: Types.ObjectId
}