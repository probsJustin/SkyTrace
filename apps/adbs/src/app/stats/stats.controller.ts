import { Body, Controller, Get, Post } from '@nestjs/common';
import { StatsService } from './stats.service';
import { ApiTags } from '@nestjs/swagger';
import { StatsDto } from './types/stats.dto';

@ApiTags('STATS')
@Controller("stats")
export class StatsController {
  constructor(private readonly statsService: StatsService) {}

  @Get('calculateProjectedMilitaryAdbsPlanes')
  calculateProjectedMilitaryAdbsPlanes(
  ) {
    return this.statsService.calculateProjectedMilitaryAdbsPlanes();
  }

  @Post('calcPlane')
  calculateMilitaryPlane(
    @Body() statsRequest: StatsDto
  ) {
    return this.statsService.calculateMilitaryPlane(statsRequest);
  }
}
 