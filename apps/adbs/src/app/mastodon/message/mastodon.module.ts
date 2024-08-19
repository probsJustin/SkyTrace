import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MastodonController } from './mastodon.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { AdbsPlane } from '../../adbs/types/adbs.plane.model';
import { AdminConfig } from '../../admin/types/admin.config.model';
import { InternalConfig } from '../../config/types/internal.config.model';
import { InternalJobs } from '../../jobs/types/jobs.model';
import { DiscordConfig } from '../../discord/configuration/types/discord.configuration.model';
import { Discord } from '../../discord/message/types/discord.model';
import { MastodonConfigurationService } from '../config/mastodon.configuration.service';
import { MastodonService } from './mastodon.service';
import { Mastodon } from './types/mastodon.model';

@Module({
    imports: [
        HttpModule,
        SequelizeModule.forFeature([AdbsPlane]),
        SequelizeModule.forFeature([AdminConfig]),
        SequelizeModule.forFeature([InternalConfig]),
        SequelizeModule.forFeature([Discord]),
        SequelizeModule.forFeature([InternalJobs]),
        SequelizeModule.forFeature([DiscordConfig]),
        SequelizeModule.forFeature([Mastodon]),
    ],
    controllers: [MastodonController],
    providers: [MastodonService, MastodonConfigurationService],
})
export class MastodonModule {}
