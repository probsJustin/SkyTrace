import { Module } from '@nestjs/common';
import { AdbsJobsService } from './adbs.jobs.service';
import { DiscordService } from '../discord/discord.service';
import { HttpModule } from '@nestjs/axios';
import { AdbsService } from '../adbs/adbs.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { AdbsPlane } from '../adbs/types/adbs.plane.model';

@Module({
    imports: [
        HttpModule,
        SequelizeModule.forFeature([AdbsPlane]),
    ],
  providers: [AdbsJobsService, DiscordService, AdbsService],
})
export class AdbsJobsModule {}