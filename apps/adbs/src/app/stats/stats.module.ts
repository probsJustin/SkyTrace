import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { HttpModule } from '@nestjs/axios';
import { StatsController } from './stats.controller';
import { StatsService } from './stats.service';
import { AdbsPlane } from '../adbs/types/adbs.plane.model';
import { AdminConfig } from '../admin/types/admin.config.model';
import { InternalConfig } from '../config/types/internal.config.model';
import { DiscordConfig } from '../discord/configuration/types/discord.configuration.model';
import { DiscordService } from '../discord/message/discord.service';
import { Discord } from '../discord/message/types/discord.model';
import { InternalJobs } from '../jobs/types/jobs.model';
import { Stats } from './types/stats.model';

@Module({
    imports: [
        HttpModule,
        SequelizeModule.forFeature([AdbsPlane]),
        SequelizeModule.forFeature([AdminConfig]),
        SequelizeModule.forFeature([InternalConfig]),
        SequelizeModule.forFeature([Discord]),
        SequelizeModule.forFeature([InternalJobs]),
        SequelizeModule.forFeature([DiscordConfig]),
        SequelizeModule.forFeature([Stats]),
    ],
    controllers: [StatsController],
    providers: [StatsService, DiscordService],
})
export class StatsModule {}
