import { Injectable } from '@nestjs/common';
import { StatsDto } from './types/stats.dto';

@Injectable()
export class StatsService {
  getData(): { message: string } {
    return ({ message: 'Hello API' });
  }
  
  calculateMilitary(): {message: string } {
    return ({ message: 'Hello API' });
  }

  calculateMilitaryPlane(statsRequest: StatsDto): {message: string } {
    return ({ message: 'Hello API' });
  }
}
