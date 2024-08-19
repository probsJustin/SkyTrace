import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { HttpModule } from '@nestjs/axios';
import { AdbsPlane } from './types/process.model';
import { InternalConfig } from '../config/types/internal.config.model';
import { AdminConfig } from '../admin/types/admin.config.model';
import { InternalJobs } from '../jobs/types/jobs.model';
import { DiscordService } from '../discord/message/discord.service';
import { Discord } from '../discord/message/types/discord.model';
import { DiscordConfig } from '../discord/configuration/types/discord.configuration.model';
import { ProcessController } from './process.controller';
import { ProcessService } from './process.service';
import { AvgService } from '../avg/avg.service';
import { Avg } from '../avg/types/avg.model';

@Module({
    imports: [
        HttpModule,
        SequelizeModule.forFeature([AdbsPlane]),
        SequelizeModule.forFeature([InternalConfig]),
        SequelizeModule.forFeature([AdminConfig]),
        SequelizeModule.forFeature([Discord]),
        SequelizeModule.forFeature([InternalJobs]),
        SequelizeModule.forFeature([DiscordConfig]),
        SequelizeModule.forFeature([Avg]),
    ],
    controllers: [ProcessController],
    providers: [ProcessService, AvgService, DiscordService],
})
export class ProcessModule {}
