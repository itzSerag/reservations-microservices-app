import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ModelDefinition, MongooseModule } from '@nestjs/mongoose';


@Module({

    // here what happening extactly 
    //is that we are importing the MongooseModule.forRootAsync()
    // method from the @nestjs/mongoose package.

    // this happens dynamically, means that the connection string is not hardcoded in the module file.
    // Instead, it is read from the environment variables using the ConfigService.
    // The ConfigService is provided by the ConfigModule, which is imported in the AppModule.
    // This way, the connection string can be configured in the .env file.
    // The ConfigService is injected into the useFactory function, which reads the MONGO_URI variable from the environment.
    // and determines the connection string dynamically.
    imports: [MongooseModule.forRootAsync({

        imports: [ConfigModule],
        useFactory: (configService: ConfigService) => ({
            uri: configService.get('MONGO_URI')
        }),

        // if u inject the ConfigService into the useFactory function,
        // u must import the ConfigModule into the module where the MongooseModule.forRootAsync() method is called.
        inject: [ConfigService]
    })
    ],
})
export class DatabaseModule {
    // in this wau we wont use mongoose we will use Database only,, even other modules, apps
    // wont know that we are using mongoose --> we just using DATABASE got it ?
    static forFeature(models: ModelDefinition[]) {
        return MongooseModule.forFeature(models)
    }
}
