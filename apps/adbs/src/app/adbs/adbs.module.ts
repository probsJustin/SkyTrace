import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { HttpModule } from '@nestjs/axios';
import { AdbsService } from './adbs.service';
import { AdbsPlane } from './types/adbs.plane.model';
import { AdbsController } from './adbs.controller';
import { DiscordModule } from '../discord/discord.module';
import { DiscordService } from '../discord/discord.service';
import { InternalConfig } from '../config/types/internal.config.model';
import { AdminConfig } from '../admin/types/admin.config.model';
import { Discord } from '../discord/types/discord.model';
import { InternalJobs } from '../jobs/types/jobs.model';

@Module({
    imports: [
        HttpModule,
        SequelizeModule.forFeature([AdbsPlane]),
        SequelizeModule.forFeature([InternalConfig]),
        SequelizeModule.forFeature([AdminConfig]),
        SequelizeModule.forFeature([Discord]),
        SequelizeModule.forFeature([InternalJobs]),
    ],
    controllers: [AdbsController],
    providers: [AdbsService, DiscordService],
})
export class AdbsModule {}
