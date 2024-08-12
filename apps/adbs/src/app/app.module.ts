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

@Module({
  imports: [HttpModule],
  controllers: [
    AppController,
    AdbsController,
    StatsController,
    DiscordController,
    ConfigController
  ],
  providers: [
    AppService, 
    AdbsService, 
    StatsService,
    DiscordService,
    ConfigService
  ],
})
export class AppModule {}
