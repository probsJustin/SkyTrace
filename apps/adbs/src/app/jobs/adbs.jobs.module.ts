import { Module } from '@nestjs/common';
import { AdbsJobsService } from './adbs.jobs.service';
import { DiscordService } from '../discord/discord.service';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [
        HttpModule,
    ],
  providers: [AdbsJobsService, DiscordService],
})
export class AdbsJobsModule {}