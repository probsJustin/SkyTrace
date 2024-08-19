import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { AdbsModule } from './adbs/adbs.module';
import { DatabaseModule } from './database.module';
import { AdbsJobsModule } from './jobs/adbs.jobs.module';
import { ScheduleModule } from '@nestjs/schedule';
import { InternalConfigModule } from './config/internal.config.module';
import { AdminConfigModule } from './admin/admin.config.module';
import { AvgModule } from './avg/avg.module';
import { PlaneSubscriptionModule } from './planeSubscriptions/planeSubscription.module';
import { DiscordModule } from './discord/message/discord.module';
import { MastodonConfigurationModule } from './mastodon/config/mastodon.configuration.module';
import { StatsModule } from './stats/stats.module';
import { DiscordConfigurationModule } from './discord/configuration/discord.configuration.module';
import { ProcessModule } from './process/process.module';


@Module({
  imports: [
    ScheduleModule.forRoot(),
    HttpModule, 
    AdbsModule, 
    DatabaseModule,
    AdbsJobsModule,
    DiscordModule, 
    InternalConfigModule,
    AdminConfigModule,
    AvgModule,
    PlaneSubscriptionModule,
    DiscordConfigurationModule,
    MastodonConfigurationModule,
    StatsModule,
    ProcessModule
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
  ],
})
export class AppModule {}
