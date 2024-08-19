import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { HttpModule } from '@nestjs/axios';
import { InternalConfigController } from './internal.config.controller';
import { InternalConfigService } from './internal.config.service';
import { InternalConfig } from './types/internal.config.model';
import { AdbsPlane } from '../adbs/types/adbs.plane.model';
import { AdminConfig } from '../admin/types/admin.config.model';
import { InternalJobs } from '../jobs/types/jobs.model';
import { DiscordService } from '../discord/message/discord.service';
import { Discord } from '../discord/message/types/discord.model';
import { DiscordConfig } from '../discord/configuration/types/discord.configuration.model';

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
    controllers: [InternalConfigController],
    providers: [InternalConfigService, DiscordService],
})
export class InternalConfigModule {}
