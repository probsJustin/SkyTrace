import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PlaneSubcriptionDto } from './types/planeSubscription.dto';
import { PlaneSubscriptionService } from './planeSubscription.service';

@ApiTags('PLANE SUBSCRIPTION')
@Controller("plane_subscription")
export class DiscordController {
  constructor(private readonly planeSubscriptionService: PlaneSubscriptionService) {}

  @Post("getData")
  getData(
    @Body() planeSubscriptionRequest: PlaneSubcriptionDto
  ) {
    return this.planeSubscriptionService.getData();
  }
}
 