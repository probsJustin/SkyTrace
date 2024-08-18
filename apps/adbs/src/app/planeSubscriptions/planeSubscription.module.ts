import { Module } from '@nestjs/common';
import { DiscordService } from '../discord/discord.service';
import { HttpModule } from '@nestjs/axios';
import { AdbsService } from '../adbs/adbs.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { AdbsPlane } from '../adbs/types/adbs.plane.model';
import { InternalConfig } from '../config/types/internal.config.model';
import { AdminConfig } from '../admin/types/admin.config.model';
import { AdminConfigService } from '../admin/admin.config.service';
import { Discord } from '../discord/types/discord.model';
import { PlaneSubscriptionService } from './planeSubscription.service';
import { PlaneSubscription } from './types/planeSubscription.model';
import { InternalJobs } from '../jobs/types/jobs.model';

@Module({
    imports: [
        HttpModule,
        SequelizeModule.forFeature([AdbsPlane]),
        SequelizeModule.forFeature([InternalConfig]),
        SequelizeModule.forFeature([AdminConfig]),
        SequelizeModule.forFeature([Discord]),
        SequelizeModule.forFeature([InternalJobs]),
        SequelizeModule.forFeature([PlaneSubscription]),

    ],
  providers: [PlaneSubscriptionService, DiscordService, AdminConfigService, AdbsService],
})
export class PlaneSubscriptionModule {}