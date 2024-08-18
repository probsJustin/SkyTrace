import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { HttpModule } from '@nestjs/axios';
import { DiscordService } from '../discord/discord.service';
import { InternalConfigController } from './internal.config.controller';
import { InternalConfigService } from './internal.config.service';
import { InternalConfig } from './types/internal.config.model';
import { AdbsPlane } from '../adbs/types/adbs.plane.model';
import { AdminConfig } from '../admin/types/admin.config.model';
import { Discord } from '../discord/types/discord.model';
import { InternalJobs } from '../jobs/types/jobs.model';

@Module({
    imports: [
        HttpModule,
        SequelizeModule.forFeature([AdbsPlane]),
        SequelizeModule.forFeature([AdminConfig]),
        SequelizeModule.forFeature([InternalConfig]),
        SequelizeModule.forFeature([Discord]),
        SequelizeModule.forFeature([InternalJobs]),
    ],
    controllers: [InternalConfigController],
    providers: [InternalConfigService, DiscordService],
})
export class InternalConfigModule {}
