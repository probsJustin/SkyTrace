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

  getData(): { message: string } {
    return ({ message: 'Hello API' });
  }
  
  getConfig(configRequest: GetInternalConfigDto): {message: string } {
    return ({ message: 'Hello API' });
  }

  setConfig(configRequest: InternalConfigDto): {message: string } {
    this.internalConfig.create({
      ...configRequest
    });
    return ({ message: 'Potential Success' });
  }

  updateConfig(configRequest: InternalConfigDto): {message: string } {
    return ({ message: 'Hello API' });
  }

  deleteConfig(configRequest: DeleteInternalConfigDto): {message: string } {
    return ({ message: 'Hello API' });
  }
}
