import { Injectable } from '@nestjs/common';
import { AdminConfig } from './types/admin.config.model';
import { InjectModel } from '@nestjs/sequelize';
import { AdminConfigDto, DeleteAdminConfigDto, GetAdminConfigDto } from './types/admin.config.dto';

@Injectable()
export class AdminConfigService {
  constructor(
    @InjectModel(AdminConfig)
    private readonly adminConfig: typeof AdminConfig,
  ){}
  
  getConfig(configRequest: GetAdminConfigDto): Promise<AdminConfig> {
    return this.adminConfig.findOne({
      where: {
        discordServer: configRequest.discordServer
      }
    });
  }

  setConfig(configRequest: AdminConfigDto): {message: string } {
    this.adminConfig.create({
      ...configRequest
    });
    return ({ message: 'Potential Success' });
  }

  async updateConfig(configRequest: AdminConfigDto): Promise<AdminConfig> {
    const rowCount = await this.adminConfig.update(AdminConfigDto, {
      where: {
        discordServer: configRequest.discordServer
      }
    });
    if(rowCount?.length > 0){
      return this.adminConfig.findOne({
        where:{
          discordServer: configRequest.discordServer
        }
      });
    }else{
      throw new Error(`Could not update configuration`)
    }
  }

  deleteConfig(configRequest: DeleteAdminConfigDto): Promise<number> {
    return this.adminConfig.destroy({
      where: {
        discordServer: configRequest.discordServer
      }
    });
  }
}
