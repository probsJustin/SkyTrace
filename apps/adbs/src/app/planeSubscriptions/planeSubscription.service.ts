import { Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

import { InjectModel } from '@nestjs/sequelize';

import { DiscordService } from '../discord/discord.service';
import { InternalConfig } from '../config/types/internal.config.model';
import { AdminConfig } from '../admin/types/admin.config.model';
import { PlaneSubscription } from './types/planeSubscription.model';
import { AdbsPlane } from '../adbs/types/adbs.plane.model';
import { PlaneSubcriptionDto } from './types/planeSubscription.dto';
import { AvgService } from '../avg/avg.service';

@Injectable()
export class PlaneSubscriptionService {
    
  constructor(    
    @InjectModel(AdbsPlane)
    private readonly planeModel: typeof AdbsPlane,
    @InjectModel(InternalConfig)
    private readonly internalConfig: typeof InternalConfig,
    @InjectModel(AdminConfig)
    private readonly adminConfig: typeof AdminConfig,
    @InjectModel(PlaneSubscription)
    private readonly planeSubscription: typeof PlaneSubscription,
    private discordService: DiscordService,
    private avgService: AvgService,
    private httpService: HttpService
    ){
  }

  getPlaneSubscriptionList(planeSubscriptionRequest: PlaneSubcriptionDto){
    return this.planeSubscription.findOne({
        where: {
            tenant: planeSubscriptionRequest.tenant
        }
    })
  }

  addPlaneSubscriptionList(planeSubscriptionRequest: PlaneSubcriptionDto) {
    return this.planeSubscription.create({
        ...planeSubscriptionRequest
    });
  }

  removePlaneSubscriptionList(planeSubscriptionRequest: PlaneSubcriptionDto){
    return this.planeSubscription.destroy({
        where: {
            tenant: planeSubscriptionRequest.tenant
        }
    })
  }

  updatePlaneSubscriptionList(planeSubscriptionRequest: PlaneSubcriptionDto) {
    return this.planeSubscription.update(planeSubscriptionRequest, {
        where: {
            tenant: planeSubscriptionRequest.tenant
        }
    })
  }

  async sendPlaneSubscriptionMessage(planeSubscriptionRequest: PlaneSubcriptionDto) {
    const allSubscriptions = await this.planeSubscription.findAll({
        where: {
            planeType: planeSubscriptionRequest.planeType
        }
    })

    allSubscriptions.forEach(async planeSubscription =>{
        this.discordService.sendMessage({
            tenant: planeSubscription.tenant,
            discordChannel: planeSubscription.discordChannel,
            discordMessage: (await this.avgService.createCalculateAvg).toString(),
            discordServer: planeSubscription.discordServer,
        })
    })
    return true;
  }

}
