import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

export class AdbsJobsService {
    private readonly logger = new Logger(AdbsJobsService.name);
  
    @Cron(CronExpression.EVERY_5_SECONDS)
    adbsApiCall_OnThirty() {
      this.logger.debug('Called every 5 seconds');
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