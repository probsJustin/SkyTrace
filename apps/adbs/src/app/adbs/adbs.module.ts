import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { HttpModule } from '@nestjs/axios';
import { AdbsService } from './adbs.service';
import { AdbsPlane } from './types/adbs.plane.model';
import { AdbsController } from './adbs.controller';

@Module({
    imports: [
        HttpModule,
        SequelizeModule.forFeature([AdbsPlane])
    ],
    controllers: [AdbsController],
    providers: [AdbsService],
})
export class AdbsModule {}
