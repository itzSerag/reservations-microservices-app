import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({

    // adding validation for our configs
    imports: [NestConfigModule.forRoot({
        validationSchema: Joi.object({
            MONGO_URI: Joi.string().required(),
        })
           
    })]
})
export class ConfigModule {}
