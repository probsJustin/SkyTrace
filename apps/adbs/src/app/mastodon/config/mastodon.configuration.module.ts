import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { HttpModule } from '@nestjs/axios';
import { InternalJobs } from '../../jobs/types/jobs.model';
import { AdbsPlane } from '../../adbs/types/adbs.plane.model';
import { AdminConfig } from '../../admin/types/admin.config.model';
import { InternalConfig } from '../../config/types/internal.config.model';
import { DiscordConfig } from '../../discord/configuration/types/discord.configuration.model';
import { DiscordService } from '../../discord/message/discord.service';
import { Discord } from '../../discord/message/types/discord.model';
import { MastodonConfig } from './types/mastodon.configuration.model';
import { MastodonConfigurationController } from './mastodon.configuration.controller';
import { MastodonConfigurationService } from './mastodon.configuration.service';



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
    controllers: [MastodonConfigurationController],
    providers: [MastodonConfigurationService, DiscordService],
})
export class MastodonConfigurationModule {}
