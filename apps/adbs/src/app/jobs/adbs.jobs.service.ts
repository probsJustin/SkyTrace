import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { AdbsService } from '../adbs/adbs.service';
import { InjectModel } from '@nestjs/sequelize';
import { AdbsPlane } from '../adbs/types/adbs.plane.model';
import crypto from 'crypto';
import { InternalJobs } from './types/jobs.model';
import { Op } from 'sequelize';
import { DiscordConfig } from '../discord/configuration/types/discord.configuration.model';
import { DiscordService } from '../discord/message/discord.service';

@Injectable()
export class AdbsJobsService {

    constructor(
        private discordService: DiscordService,
        private adbsService: AdbsService,
        @InjectModel(AdbsPlane)
        private readonly planeModel: typeof AdbsPlane,
        @InjectModel(InternalJobs)
        private readonly internalJobs: typeof InternalJobs,
        @InjectModel(DiscordConfig)
        private readonly discordConfig: typeof DiscordConfig,
        ){}

    private readonly logger = new Logger(AdbsJobsService.name);
    
    @Cron(CronExpression.EVERY_HOUR)
    async adbsApiCall_OnThirty() {
      const getJobNumber = `${Date.now().toString()}${crypto.randomBytes(10).toString('hex')}`;
      await this.internalJobs.create({
        jobNumber: getJobNumber,
        tenant: "admin",
        jobStatus: "STARTING",
        jobFunction: "POLL_ADBS_EXCHANGE"
      })
      this.logger.debug('Calling ADBS Exchange and writing to database....');
      try{
        const rowCountBefore = await this.planeModel.findAll();
        await this.internalJobs.update({
          jobStatus: "CALLING_ADBS_API"
        }, {
          where:{
            jobNumber: getJobNumber,
          }
        })
        await this.discordService.sendAdminMessage({tenant: "admin", discordChannel: "Justins Code Support", discordServer: "", discordMessage: `[${new Date()}]:[${getJobNumber}] Row Count Before: ${rowCountBefore.length}`});
        console.log(JSON.stringify(await this.adbsService.callMilitaryAPIWriteDb()));
        await this.internalJobs.update({
          jobStatus: "CALLED_ADBS_API_DATABASE"
        }, {
          where:{
            jobNumber: getJobNumber,
          }
        })
        await this.discordService.sendAdminMessage({tenant: "admin", discordChannel: "Justins Code Support", discordServer: "", discordMessage: `[${new Date()}]:[${getJobNumber}] Calling Adbs Exchange....writing to database...`});
        const rowCountAfter = await this.planeModel.findAll();
        await this.internalJobs.update({
          jobStatus: "NOTIF"
        }, {
          where:{
            jobNumber: getJobNumber,
          }
        })
        await this.discordService.sendAdminMessage({tenant: "admin", discordChannel: "Justins Code Support", discordServer: "", discordMessage: `[${new Date()}]:[${getJobNumber}] Row Count After: ${rowCountAfter.length}`});
        await this.internalJobs.update({
          jobStatus: "SOFT_DELETE"
        }, {
          where:{
            jobNumber: getJobNumber,
          }
        })
      }catch(err){
        console.log(`JSON: ${JSON.stringify(err)}`);
      }
    }

    // @Cron(CronExpression.EVERY_30_MINUTES)
    // async cleaningUpPlanes() {
    //   const getJobNumber = `${Date.now().toString()}${crypto.randomBytes(10).toString('hex')}`;
    //   await this.internalJobs.create({
    //     jobNumber: getJobNumber,
    //     tenant: "admin",
    //     jobStatus: "STARTING_CLEANUP",
    //     jobFunction: "DATABASE_CLEANUP"
    //   })
    //   this.logger.debug('Calling ADBS Exchange and writing to database....');
    //     try{
    //       const rowCountBefore = await this.planeModel.findAll();
    //       await this.internalJobs.update({
    //         jobStatus: "CALLING_ADBS_API"
    //       }, {
    //         where:{
    //           jobNumber: getJobNumber,
    //         }
    //       })
    //       const dateOfInterest = new Date();

    //       // Create a start of day date object
    //       const startOfDay = new Date(dateOfInterest);
    //       startOfDay.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to zero
          
    //       // Create an end of day date object
    //       const endOfDay = new Date(dateOfInterest);
    //       endOfDay.setHours(23, 59, 59, 999); // Set to the last millisecond of the day
          
    //       await this.discordService.sendAdminMessage({tenant: "admin", discordChannel: "Justins Code Support", discordServer: "", discordMessage: `[${new Date()}]:[${getJobNumber}] Row Count Before: ${rowCountBefore.length}`});
    //       await this.internalJobs.destroy({
    //         where: {
    //           createdAt: {
    //             [Op.gte]: startOfDay, // Greater than or equal to the start of the day
    //             [Op.lte]: endOfDay    // Less than or equal to the end of the day
    //           }
    //         }
    //       })
    //       await this.discordService.sendAdminMessage({tenant: "admin", discordChannel: "Justins Code Support", discordServer: "", discordMessage: `[${new Date()}]:[${getJobNumber}] Deleting all records for today.....`});
    //       const rowCountAfter = await this.planeModel.findAll();
    //       await this.internalJobs.update({
    //         jobStatus: "DELETED_RECORDS"
    //       }, {
    //         where:{
    //           jobNumber: getJobNumber,
    //         }
    //       })
    //       await this.discordService.sendAdminMessage({tenant: "admin", discordChannel: "Justins Code Support", discordServer: "", discordMessage: `[${new Date()}]:[${getJobNumber}] Row Count After: ${rowCountAfter.length}`});
    //       await this.internalJobs.update({
    //         jobStatus: "SOFT_DELETE"
    //       }, {
    //         where:{
    //           jobNumber: getJobNumber,
    //         }
    //       })
    //     }catch(err){
    //       console.log(`JSON: ${JSON.stringify(err)}`);
    //     }
    // }

    @Cron(CronExpression.EVERY_30_MINUTES)
    adbsStats() {
      this.logger.debug('Called every 5 seconds');
    }

    @Cron(CronExpression.EVERY_30_MINUTES)
    adbsStatsCalc() {
      this.logger.debug('Called every 5 seconds');
    }

  }