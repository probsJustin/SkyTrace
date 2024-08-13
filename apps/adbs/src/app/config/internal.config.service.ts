import { Injectable } from '@nestjs/common';
import { DeleteInternalConfigDto, GetInternalConfigDto, InternalConfigDto } from './types/internal.config.dto';
import { InternalConfig } from './types/internal.config.model';
import { InjectModel } from '@nestjs/sequelize';
import { AdminConfig } from '../admin/types/admin.config.model';
import { AdbsPlane } from '../adbs/types/adbs.plane.model';

@Injectable()
export class InternalConfigService {
  constructor(
    @InjectModel(AdbsPlane)
    private readonly planeModel: typeof AdbsPlane,
    @InjectModel(InternalConfig)
    private readonly internalConfig: typeof InternalConfig,
    @InjectModel(AdminConfig)
    private readonly adminConfig: typeof AdminConfig,
  ){}
  
  getConfig(configRequest: GetInternalConfigDto): Promise<InternalConfig> {
    return this.internalConfig.findOne({
      where: {
        discordServer: configRequest.discordServer
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
        discordServer: configRequest.discordServer
      }
    });
    if(rowCount?.length > 0){
      return this.internalConfig.findOne({
        where:{
          discordServer: configRequest.discordServer
        }
      });
    }else{
      throw new Error(`Could not update configuration`)
    }
  }

  deleteConfig(configRequest: DeleteInternalConfigDto): Promise<number> {
    return this.internalConfig.destroy({
      where: {
        discordServer: configRequest.discordServer
      }
    });
  }
}
