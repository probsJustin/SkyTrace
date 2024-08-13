import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdbsController } from './adbs/adbs.controller';
import { AdbsService } from './adbs/adbs.service';
import { DiscordController } from './discord/discord.controller';
import { DiscordService } from './discord/discord.service';
import { StatsService } from './stats/stats.service';
import { StatsController } from './stats/stats.controller';
import { ConfigController } from './config/config.controller';
import { ConfigService } from './config/config.service';
import { HttpModule } from '@nestjs/axios';
import { AdbsModule } from './adbs/adbs.module';
import { DatabaseModule } from './database.module';
import { AdbsJobsModule } from './jobs/adbs.jobs.module';
import { DiscordModule } from './discord/discord.module';
import { ScheduleModule } from '@nestjs/schedule';


@Module({
  imports: [
    ScheduleModule.forRoot(),
    HttpModule, 
    AdbsModule, 
    DatabaseModule,
    AdbsJobsModule,
    DiscordModule
  ],
  controllers: [
    AppController,
    StatsController,
    ConfigController
  ],
  providers: [
    AppService, 
    StatsService,
    ConfigService
  ],
})
export class AppModule {}
