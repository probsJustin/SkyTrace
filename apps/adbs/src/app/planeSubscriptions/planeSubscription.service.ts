import { Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

import { InjectModel } from '@nestjs/sequelize';

import { DiscordService } from '../discord/discord.service';
import { InternalConfig } from '../config/types/internal.config.model';
import { AdminConfig } from '../admin/types/admin.config.model';
import { PlaneSubscription } from './types/planeSubscription.model';
import { AdbsPlane } from '../adbs/types/adbs.plane.model';
import { PlaneSubcriptionDto } from './types/planeSubscription.dto';

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

  }
