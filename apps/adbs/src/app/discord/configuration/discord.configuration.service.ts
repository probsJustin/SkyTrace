import { Injectable } from '@nestjs/common';
import { DiscordConfigurationDto} from './types/discord.configuration.dto';
import { InjectModel } from '@nestjs/sequelize';
import { DiscordConfig } from './types/discord.configuration.model';
import { InternalConfig } from '../../config/types/internal.config.model';
import { AdminConfig } from '../../admin/types/admin.config.model';
import { AdbsPlane } from '../../adbs/types/adbs.plane.model';

@Injectable()
export class DiscordConfigurationService {
  constructor(
    @InjectModel(AdbsPlane)
    private readonly planeModel: typeof AdbsPlane,
    @InjectModel(InternalConfig)
    private readonly internalConfig: typeof InternalConfig,
    @InjectModel(AdminConfig)
    private readonly adminConfig: typeof AdminConfig,
    @InjectModel(DiscordConfig)
    private readonly discordConfig: typeof DiscordConfig,
  ){}
  
  getConfig(discordConfig: DiscordConfigurationDto): Promise<DiscordConfig> {
    return this.discordConfig.findOne({
      where: {
        tenant: discordConfig.tenant
      }
    });
  }

  setConfig(discordConfig: DiscordConfigurationDto): {message: string } {
    this.discordConfig.create({
      ...discordConfig
    });
    return ({ message: 'Potential Success' });
  }

  async updateConfig(discordConfig: DiscordConfigurationDto): Promise<DiscordConfig> {
    const rowCount = await this.discordConfig.update(DiscordConfigurationDto, {
      where: {
        discordServer: discordConfig.discordServer
      }
    });
    if(rowCount?.length > 0){
      return this.discordConfig.findOne({
        where:{
          discordServer: discordConfig.discordServer
        }
      });
    }else{
      throw new Error(`Could not update configuration`)
    }
  }

  deleteConfig(discordConfig: DiscordConfigurationDto): Promise<number> {
    return this.discordConfig.destroy({
      where: {
        discordServer: discordConfig.discordServer
      }
    });
  }
}
