import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AvgController } from './avg.controller';
import { AvgService } from './avg.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Avg } from './types/avg.model';
import { AdbsPlane } from '../adbs/types/adbs.plane.model';
import { AdminConfig } from '../admin/types/admin.config.model';
import { InternalConfig } from '../config/types/internal.config.model';


@Module({
    imports: [
        HttpModule,
        SequelizeModule.forFeature([Avg]),
        SequelizeModule.forFeature([AdbsPlane]),
        SequelizeModule.forFeature([AdminConfig]),
        SequelizeModule.forFeature([InternalConfig]),
    ],
    controllers: [AvgController],
    providers: [AvgService],
})
export class AvgModule {}
