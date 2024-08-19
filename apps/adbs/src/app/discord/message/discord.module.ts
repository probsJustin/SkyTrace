import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { DiscordController } from './discord.controller';
import { DiscordService } from './discord.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { AdbsPlane } from '../../adbs/types/adbs.plane.model';
import { AdminConfig } from '../../admin/types/admin.config.model';
import { InternalConfig } from '../../config/types/internal.config.model';
import { InternalJobs } from '../../jobs/types/jobs.model';
import { Discord } from './types/discord.model';
import { DiscordConfig } from '../configuration/types/discord.configuration.model';
import { DiscordConfigurationService } from '../configuration/discord.configuration.service';



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
    controllers: [DiscordController],
    providers: [DiscordService, DiscordConfigurationService],
})
export class DiscordModule {}
