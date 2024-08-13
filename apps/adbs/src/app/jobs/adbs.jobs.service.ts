import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { DiscordService } from '../discord/discord.service';
import { AdbsService } from '../adbs/adbs.service';

@Injectable()
export class AdbsJobsService {

    constructor(
        private discordService: DiscordService,
        private adbsService: AdbsService
        ){}

    private readonly logger = new Logger(AdbsJobsService.name);
    
    @Cron(CronExpression.EVERY_10_SECONDS)
    async adbsApiCall_OnThirty() {
      this.logger.debug('Called every 5 seconds');
      console.log(`it ran...`); 
      try{
        await this.adbsService.callMilitaryAPIWriteDb();
        await this.discordService.sendMessage({discordChannel: "Justins Code Support", message: "Calling Adbs Exchange....writing to database..."});
      }catch(err){
        console.log(`JSON: ${JSON.stringify(err)}`);
      }
    }

    @Cron(CronExpression.EVERY_30_MINUTES)
    adbsApiCall_OnHour() {
      this.logger.debug('Called every 5 seconds');
    }

    @Cron(CronExpression.EVERY_30_MINUTES)
    adbsStats() {
      this.logger.debug('Called every 5 seconds');
    }

    @Cron(CronExpression.EVERY_30_MINUTES)
    adbsStatsCalc() {
      this.logger.debug('Called every 5 seconds');
    }

  }