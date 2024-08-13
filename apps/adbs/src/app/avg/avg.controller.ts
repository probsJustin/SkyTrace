import { Body, Controller, Post } from '@nestjs/common';
import { AvgService } from './avg.service';
import { ApiTags } from '@nestjs/swagger';
import { AvgDto } from './types/avg.dto';

@ApiTags('AVG')
@Controller("avg")
export class AvgController {
  constructor(private readonly avgService: AvgService) {}

  @Post("createCalculateAvg")
  createCalculateAvg(
    @Body() avgRequest: AvgDto
  ) {
    return this.avgService.createCalculateAvg(avgRequest);
  }

  @Post("updateCalculateAvg")
  updateCalculateAvg(
    @Body() avgRequest: AvgDto
  ) {
    return this.avgService.updateCalculateAvg(avgRequest);
  }

  @Post("deleteCalculateAvg")
  deleteCalculateAvg(
    @Body() avgRequest: AvgDto
  ) {
    return this.avgService.deleteCalculateAvg(avgRequest);
  }

  @Post("getCalculateAvg")
  getCalculateAvg(
    @Body() avgRequest: AvgDto
  ) {
    return this.avgService.getCalculateAvg(avgRequest);
  }
}
 