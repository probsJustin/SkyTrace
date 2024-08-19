import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AdbsService } from '../adbs/adbs.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { AdbsPlane } from '../adbs/types/adbs.plane.model';
import { InternalConfig } from '../config/types/internal.config.model';
import { AdminConfig } from '../admin/types/admin.config.model';
import { AdminConfigService } from '../admin/admin.config.service';
import { PlaneSubscriptionService } from './planeSubscription.service';
import { PlaneSubscription } from './types/planeSubscription.model';
import { InternalJobs } from '../jobs/types/jobs.model';
import { Discord } from '../discord/message/types/discord.model';
import { DiscordService } from '../discord/message/discord.service';
import { DiscordConfig } from '../discord/configuration/types/discord.configuration.model';
import { AvgService } from '../avg/avg.service';
import { Avg } from '../avg/types/avg.model';

@Module({
    imports: [
        HttpModule,
        SequelizeModule.forFeature([AdbsPlane]),
        SequelizeModule.forFeature([Avg]),
        SequelizeModule.forFeature([InternalConfig]),
        SequelizeModule.forFeature([AdminConfig]),
        SequelizeModule.forFeature([Discord]),
        SequelizeModule.forFeature([InternalJobs]),
        SequelizeModule.forFeature([PlaneSubscription]),
        SequelizeModule.forFeature([DiscordConfig]),


    ],
  providers: [PlaneSubscriptionService, DiscordService, AdminConfigService, AvgService, AdbsService],
})
export class PlaneSubscriptionModule {}