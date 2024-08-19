import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { HttpModule } from '@nestjs/axios';
import { DiscordConfig } from './types/discord.configuration.model';
import { InternalJobs } from '../../jobs/types/jobs.model';
import { AdbsPlane } from '../../adbs/types/adbs.plane.model';
import { AdminConfig } from '../../admin/types/admin.config.model';
import { InternalConfigController } from '../../config/internal.config.controller';
import { InternalConfigService } from '../../config/internal.config.service';
import { InternalConfig } from '../../config/types/internal.config.model';
import { DiscordService } from '../message/discord.service';
import { Discord } from '../message/types/discord.model';
import { DiscordConfigurationService } from './discord.configuration.service';
import { DiscordConfigurationController } from './discord.configuration.controller';

@Module({
    imports: [
        HttpModule,
        SequelizeModule.forFeature([AdbsPlane]),
        SequelizeModule.forFeature([AdminConfig]),
        SequelizeModule.forFeature([InternalConfig]),
        SequelizeModule.forFeature([Discord]),
        SequelizeModule.forFeature([InternalJobs]),
        SequelizeModule.forFeature([DiscordConfig]),
    ],
    controllers: [DiscordConfigurationController],
    providers: [DiscordConfigurationService, DiscordService],
})
export class DiscordConfigurationModule {}
