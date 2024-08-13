import { Module } from '@nestjs/common';
import { AdbsJobsService } from './adbs.jobs.service';
import { DiscordService } from '../discord/discord.service';
import { HttpModule } from '@nestjs/axios';
import { AdbsService } from '../adbs/adbs.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { AdbsPlane } from '../adbs/types/adbs.plane.model';
import { InternalConfig } from '../config/types/internal.config.model';
import { AdminConfig } from '../admin/types/admin.config.model';
import { AdminConfigService } from '../admin/admin.config.service';

@Module({
    imports: [
        HttpModule,
        SequelizeModule.forFeature([AdbsPlane]),
        SequelizeModule.forFeature([InternalConfig]),
        SequelizeModule.forFeature([AdminConfig]),
    ],
  providers: [AdbsJobsService, DiscordService, AdminConfigService, AdbsService],
})
export class AdbsJobsModule {}