import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AdbsPlane } from './types/process.model';
import { InjectModel } from '@nestjs/sequelize';
import { InternalConfig } from '../config/types/internal.config.model';
import { AdminConfig } from '../admin/types/admin.config.model';
import { DiscordService } from '../discord/message/discord.service';
import { AvgService } from '../avg/avg.service';
import { ProcessDto } from './types/process.dto';

@Injectable()
export class ProcessService {
    
  constructor(    
    @InjectModel(AdbsPlane)
    private readonly planeModel: typeof AdbsPlane,
    @InjectModel(InternalConfig)
    private readonly internalConfig: typeof InternalConfig,
    @InjectModel(AdminConfig)
    private readonly adminConfig: typeof AdminConfig,
    private discordService: DiscordService,
    private readonly avgService: AvgService,
    private httpService: HttpService,
    ){
  }

  async calculatePlaneTypeAvgVerseToday(processRequest: ProcessDto): Promise<any> {
    const averageCalc = await this.avgService.createCalculateAvg(
      {
        ...processRequest
      }
    );


    const todayAverageCalc = await this.avgService.createCalculateAvg({
      type: processRequest.type,
      timeFrame: "1",
    })
    return (averageCalc.AVG - todayAverageCalc.AVG);
  }



}
