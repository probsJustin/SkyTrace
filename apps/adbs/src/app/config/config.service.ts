import { Injectable } from '@nestjs/common';
import { ConfigDto } from './types/config.dto';

@Injectable()
export class ConfigService {
  getData(): { message: string } {
    return ({ message: 'Hello API' });
  }
  
  getConfig(): {message: string } {
    return ({ message: 'Hello API' });
  }

  setConfig(configRequest: ConfigDto): {message: string } {
    return ({ message: 'Hello API' });
  }

  updateConfig(configRequest: ConfigDto): {message: string } {
    return ({ message: 'Hello API' });
  }

  deleteConfig(configRequest: ConfigDto): {message: string } {
    return ({ message: 'Hello API' });
  }
}
