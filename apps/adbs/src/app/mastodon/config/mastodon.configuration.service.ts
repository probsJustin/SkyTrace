import { Injectable } from '@nestjs/common';
import {  MastodonConfigurationDto} from './types/mastodon.configuration.dto';
import { InjectModel } from '@nestjs/sequelize';
import {  MastodonConfig } from './types/mastodon.configuration.model';
import { InternalConfig } from '../../config/types/internal.config.model';
import { AdminConfig } from '../../admin/types/admin.config.model';
import { AdbsPlane } from '../../adbs/types/adbs.plane.model';
import { DiscordConfig } from '../../discord/configuration/types/discord.configuration.model';

@Injectable()
export class MastodonConfigurationService {
  constructor(
    @InjectModel(AdbsPlane)
    private readonly planeModel: typeof AdbsPlane,
    @InjectModel(InternalConfig)
    private readonly internalConfig: typeof InternalConfig,
    @InjectModel(AdminConfig)
    private readonly adminConfig: typeof AdminConfig,
    @InjectModel(DiscordConfig)
    private readonly discordConfig: typeof DiscordConfig,
    @InjectModel(MastodonConfig)
    private readonly mastodonConfig: typeof MastodonConfig,

  ){}
  
  getMastodonConfig(mastodonConfig: MastodonConfigurationDto): Promise<MastodonConfig> {
    return this.mastodonConfig.findOne({
      where: {
        tenant: mastodonConfig.tenant
      }
    });
  }

  setMastodonConfig(mastodonConfig: MastodonConfigurationDto): {message: string } {
    this.mastodonConfig.create({
      ...mastodonConfig
    });
    return ({ message: 'Potential Success' });
  }

  async updateMastodonConfig(mastodonConfig: MastodonConfigurationDto): Promise<MastodonConfig> {
    const rowCount = await this.mastodonConfig.update(MastodonConfigurationDto, {
      where: {
        mastodonAccount: mastodonConfig.mastodonAccount
      }
    });
    if(rowCount?.length > 0){
      return this.mastodonConfig.findOne({
        where:{
          mastodonAccount: mastodonConfig.mastodonAccount
        }
      });
    }else{
      throw new Error(`Could not update configuration`)
    }
  }

  deleteMastodonConfig(mastodonConfig: MastodonConfigurationDto): Promise<number> {
    return this.mastodonConfig.destroy({
      where: {
        mastodonAccount: mastodonConfig.mastodonAccount
      }
    });
  }
}
