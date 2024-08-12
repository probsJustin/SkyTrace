import { Body, Controller, Post } from '@nestjs/common';
import { StatsService } from './stats.service';
import { ApiTags } from '@nestjs/swagger';
import { StatsDto } from './types/stats.dto';

@ApiTags('STATS')
@Controller("stats")
export class StatsController {
  constructor(private readonly statsService: StatsService) {}

  @Post()
  calculateMilitary(
    @Body() statsRequest: StatsDto
  ) {
    return this.statsService.calculateMilitary();
  }

  @Post('calcPlane')
  calculateMilitaryPlane(
    @Body() statsRequest: StatsDto
  ) {
    return this.statsService.calculateMilitaryPlane(statsRequest);
  }
}
 