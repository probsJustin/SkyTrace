import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { InjectModel } from '@nestjs/sequelize';
import { InternalConfig } from '../config/types/internal.config.model';
import { AdminConfig } from '../admin/types/admin.config.model';
import { Avg } from './types/avg.model';
import { AvgDto } from './types/avg.dto';
import { AdbsPlane } from '../adbs/types/adbs.plane.model';

@Injectable()
export class AvgService {
  constructor(
    private httpService: HttpService,
    @InjectModel(InternalConfig)
    private readonly internalConfig: typeof InternalConfig,
    @InjectModel(AdminConfig)
    private readonly adminConfig: typeof AdminConfig,
    @InjectModel(AdbsPlane)
    private readonly adbsPlane: typeof AdbsPlane,
    @InjectModel(Avg)
    private readonly avg: typeof Avg,
    ){
  }

  async createCalculateAvg(avgRequest: AvgDto) {
    // Assuming `adbsPlane` is defined somewhere in your class/service
    const planeSeen = await this.adbsPlane.findAll({
        where: {
            t: avgRequest.type
        }
    });

    // Mapping retrieved planes to a simplified dictionary format
    const exampleDictionary = planeSeen.map(plane => ({
        type: plane.t,
        hex: plane.hex,
        createdAt: plane.createdAt
    }));

    // Initializing `flightSchedule` as an object
    const flightSchedule = {};

    // Organizing planes by 'hex' into 'flightSchedule'
    exampleDictionary.forEach(plane => {
        // Check if the hex key already exists, if not, initialize it as an empty array
        if (!flightSchedule[plane.hex]) {
            flightSchedule[plane.hex] = [];
        }

        // Push the plane object to the respective hex array
        flightSchedule[plane.hex].push(plane);
    });

    // Returning the structured dictionary of planes grouped by 'hex'
    return {
      "AVG": (Object.keys(flightSchedule).length/Number(avgRequest.days)),
      "type": avgRequest.type
    }
  }
  
  async updateCalculateAvg(avgRequest: AvgDto): Promise<void> {
    this.avg.update(avgRequest, {
      where:{
        type: avgRequest.type,
        days: avgRequest.days
      },
      ...avgRequest
    })
  }

  async deleteCalculateAvg(avgRequest: AvgDto) {
    return this.avg.destroy({
      where: {
        type: avgRequest.type,
        days: avgRequest.days
      }
    });
  }

  async getCalculateAvg(avgRequest: AvgDto) {
    return this.avg.findOne({
      where: {
        type: avgRequest.type,
        days: avgRequest.days
      }
    });
  }
}
