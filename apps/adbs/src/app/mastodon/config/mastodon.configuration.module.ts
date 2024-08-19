import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { HttpModule } from '@nestjs/axios';
import { InternalJobs } from '../../jobs/types/jobs.model';
import { AdbsPlane } from '../../adbs/types/adbs.plane.model';
import { AdminConfig } from '../../admin/types/admin.config.model';
import { InternalConfig } from '../../config/types/internal.config.model';
import { DiscordConfigurationController } from '../../discord/configuration/discord.configuration.controller';
import { DiscordConfigurationService } from '../../discord/configuration/discord.configuration.service';
import { DiscordConfig } from '../../discord/configuration/types/discord.configuration.model';
import { DiscordService } from '../../discord/message/discord.service';
import { Discord } from '../../discord/message/types/discord.model';
import { MastodonConfig } from './types/mastodon.configuration.model';



@Module({
    imports: [
        HttpModule,
        SequelizeModule.forFeature([AdbsPlane]),
        SequelizeModule.forFeature([AdminConfig]),
        SequelizeModule.forFeature([InternalConfig]),
        SequelizeModule.forFeature([Discord]),
        SequelizeModule.forFeature([InternalJobs]),
        SequelizeModule.forFeature([DiscordConfig]),
        SequelizeModule.forFeature([MastodonConfig]),
    ],
    controllers: [DiscordConfigurationController],
    providers: [DiscordConfigurationService, DiscordService],
})
export class DiscordConfigurationModule {}
