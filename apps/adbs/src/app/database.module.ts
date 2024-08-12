
import { Global, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AdbsPlane } from './adbs/types/adbs.plane.model';

@Global()
@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [ConfigModule], // Import the ConfigModule to use ConfigService
      useFactory: async (configService: ConfigService) => ({
        dialect: 'mysql',
        host: "localhost",
        port: 3306,
        username: "root",
        password: "test",
        database: "example",
        autoLoadModels: true,
        synchronize: true,
        models: [AdbsPlane], // Ensure Account model is here
      }),
      inject: [ConfigService], // Inject the ConfigService to be used in the useFactory function
    }),
  ],
  exports: [SequelizeModule],
})
export class DatabaseModule {}
 