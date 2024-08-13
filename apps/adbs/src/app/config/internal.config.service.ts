import { Injectable } from '@nestjs/common';
import { DeleteInternalConfigDto, GetInternalConfigDto, InternalConfigDto } from './types/internal.config.dto';
import { InternalConfig } from './types/internal.config.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class InternalConfigService {
  constructor(
    @InjectModel(InternalConfig)
    private readonly internalConfig: typeof InternalConfig,
  ){}
  
  getConfig(configRequest: GetInternalConfigDto): Promise<InternalConfig> {
    return this.internalConfig.findOne({
      where: {
        discordChannel: configRequest.discordChannel
      }
    });
  }

  setConfig(configRequest: InternalConfigDto): {message: string } {
    this.internalConfig.create({
      ...configRequest
    });
    return ({ message: 'Potential Success' });
  }

  async updateConfig(configRequest: InternalConfigDto): Promise<InternalConfig> {
    const rowCount = await this.internalConfig.update(InternalConfigDto, {
      where: {
        discordChannel: configRequest.discordChannel
      }
    });
    if(rowCount?.length > 0){
      return this.internalConfig.findOne({
        where:{
          discordChannel: configRequest.discordChannel
        }
      });
    }else{
      throw new Error(`Could not update configuration`)
    }
  }

  deleteConfig(configRequest: DeleteInternalConfigDto): Promise<number> {
    return this.internalConfig.destroy({
      where: {
        discordChannel: configRequest.discordChannel
      }
    });
  }
}
