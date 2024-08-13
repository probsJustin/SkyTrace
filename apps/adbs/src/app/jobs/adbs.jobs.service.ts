import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { DiscordService } from '../discord/discord.service';

@Injectable()
export class AdbsJobsService {

    constructor(
        private discordService: DiscordService
        ){

    }

    private readonly logger = new Logger(AdbsJobsService.name);
    
    @Cron(CronExpression.EVERY_5_SECONDS)
    async adbsApiCall_OnThirty() {
      this.logger.debug('Called every 5 seconds');
      console.log(`it ran...`); 
      try{
        await this.discordService.sendMessage({discordChannel: "", message: "testing 5 seconds"});
      }catch(err){
        console.log(`JSON: ${JSON.stringify(err)}`);
      }
    }

    @Cron(CronExpression.EVERY_5_SECONDS)
    adbsApiCall_OnHour() {
      this.logger.debug('Called every 5 seconds');
    }

    @Cron(CronExpression.EVERY_5_SECONDS)
    adbsStats() {
      this.logger.debug('Called every 5 seconds');
    }

    @Cron(CronExpression.EVERY_5_SECONDS)
    adbsStatsCalc() {
      this.logger.debug('Called every 5 seconds');
    }

  }