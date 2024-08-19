import { Module } from '@nestjs/common';
import { AdbsJobsService } from './adbs.jobs.service';
import { HttpModule } from '@nestjs/axios';
import { AdbsService } from '../adbs/adbs.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { AdbsPlane } from '../adbs/types/adbs.plane.model';
import { InternalConfig } from '../config/types/internal.config.model';
import { AdminConfig } from '../admin/types/admin.config.model';
import { AdminConfigService } from '../admin/admin.config.service';
import { InternalJobs } from './types/jobs.model';
import { Discord } from '../discord/message/types/discord.model';
import { DiscordService } from '../discord/message/discord.service';
import { DiscordConfig } from '../discord/configuration/types/discord.configuration.model';
import { DiscordConfigurationService } from '../discord/configuration/discord.configuration.service';
import { StatsService } from '../stats/stats.service';
import { Stats } from '../stats/types/stats.model';

@Module({
    imports: [
        HttpModule,
        SequelizeModule.forFeature([AdbsPlane]),
        SequelizeModule.forFeature([InternalConfig]),
        SequelizeModule.forFeature([AdminConfig]),
        SequelizeModule.forFeature([Discord]),
        SequelizeModule.forFeature([InternalJobs]),
        SequelizeModule.forFeature([DiscordConfig]),
        SequelizeModule.forFeature([Stats])
    ],
  providers: [AdbsJobsService, StatsService, DiscordService, DiscordConfigurationService, AdminConfigService, AdbsService],
})
export class AdbsJobsModule {}