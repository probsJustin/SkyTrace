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
        createdAt: plane.createdAt,
        plane: plane
    }));


    // Initializing `flightSchedule` as an object
    const flights = {};
    // Organizing planes by 'hex' into `flights`
    exampleDictionary.forEach(plane => { 
        if (!flights[plane.hex]) {
            flights[plane.hex] = [];
        }
        flights[plane.hex].push(plane);
    });

    const flightSchedule = {};
    // Iterate through each hex group and organize by 'createdAt'
    Object.keys(flights).forEach(hex => {
        flights[hex].forEach(plane => {
            if (!flightSchedule[plane.createdAt]) {
                flightSchedule[plane.createdAt] = [];
            }
            flightSchedule[plane.createdAt].push(plane);
        });
    });

    // Returning the structured dictionary of planes grouped by 'hex'
    return {
      "AVG": (Object.keys(flightSchedule).length/Number(avgRequest.days)),
      "type": avgRequest.type
    }
  }

  async debugCreateCalculateAvg(avgRequest: AvgDto) {
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
        createdAt: plane.createdAt,
        plane: plane
    }));


    // Initializing `flightSchedule` as an object
    const flights = {};
    // Organizing planes by 'hex' into `flights`
    exampleDictionary.forEach(plane => { 
        if (!flights[plane.hex]) {
            flights[plane.hex] = [];
        }
        flights[plane.hex].push(plane);
    });

    const flightSchedule = {};
    // Iterate through each hex group and organize by 'createdAt'
    Object.keys(flights).forEach(hex => {
        flights[hex].forEach(plane => {
            if (!flightSchedule[plane.createdAt]) {
                flightSchedule[plane.createdAt] = [];
            }
            flightSchedule[plane.createdAt].push(plane);
        });
    });

    return flightSchedule;
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
