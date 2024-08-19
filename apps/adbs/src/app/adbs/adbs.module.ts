import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { HttpModule } from '@nestjs/axios';
import { AdbsService } from './adbs.service';
import { AdbsPlane } from './types/adbs.plane.model';
import { AdbsController } from './adbs.controller';
import { InternalConfig } from '../config/types/internal.config.model';
import { AdminConfig } from '../admin/types/admin.config.model';
import { InternalJobs } from '../jobs/types/jobs.model';
import { DiscordService } from '../discord/message/discord.service';
import { Discord } from '../discord/message/types/discord.model';

@Module({
    imports: [
        HttpModule,
        SequelizeModule.forFeature([AdbsPlane]),
        SequelizeModule.forFeature([InternalConfig]),
        SequelizeModule.forFeature([AdminConfig]),
        SequelizeModule.forFeature([Discord]),
        SequelizeModule.forFeature([InternalJobs]),
    ],
    controllers: [AdbsController],
    providers: [AdbsService, DiscordService],
})
export class AdbsModule {}
