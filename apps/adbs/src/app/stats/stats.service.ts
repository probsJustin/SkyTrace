import { Injectable } from '@nestjs/common';
import { StatsDto } from './types/stats.dto';
import { InjectModel } from '@nestjs/sequelize';
import { AdbsPlane } from '../adbs/types/adbs.plane.model';
import { AdminConfig } from '../admin/types/admin.config.model';
import { InternalConfig } from '../config/types/internal.config.model';
import { DiscordConfig } from '../discord/configuration/types/discord.configuration.model';
import { Stats } from './types/stats.model';
import { Op } from 'sequelize';

@Injectable()
export class StatsService {

  constructor(
    @InjectModel(AdbsPlane)
    private readonly adbsPlane: typeof AdbsPlane,
    @InjectModel(InternalConfig)
    private readonly internalConfig: typeof InternalConfig,
    @InjectModel(AdminConfig)
    private readonly adminConfig: typeof AdminConfig,
    @InjectModel(DiscordConfig)
    private readonly discordConfig: typeof DiscordConfig,
    @InjectModel(Stats)
    private readonly stats: typeof Stats,
  ){

  }

  async calculateProjectedMilitaryAdbsPlanes(): Promise<number> {
    const dateOfInterest = new Date();
    const startOfDay = new Date(dateOfInterest);
    startOfDay.setHours(0, 0, 0, 0); 

    const endOfDay = new Date(dateOfInterest);
    endOfDay.setHours(23, 59, 59, 999); // Set to the last millisecond of the day
    const rowCountForToday = await this.adbsPlane.findAll({
      where: {
        createdAt: {
          [Op.gte]: startOfDay,
          [Op.lte]: endOfDay // Less than or equal to the end of the day
        }
      }
    })
    return rowCountForToday.length * 365;
  }
  
  calculateMilitary(): {message: string } {
    return ({ message: 'Hello API' });
  }

  calculateMilitaryPlane(statsRequest: StatsDto): {message: string } {
    return ({ message: 'Hello API' });
  }
}
