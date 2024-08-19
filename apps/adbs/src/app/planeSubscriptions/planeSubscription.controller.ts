import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PlaneSubcriptionDto } from './types/planeSubscription.dto';
import { PlaneSubscriptionService } from './planeSubscription.service';

@ApiTags('PLANE SUBSCRIPTION')
@Controller("plane_subscription")
export class DiscordController {
  constructor(private readonly planeSubscriptionService: PlaneSubscriptionService) {}

  @Post("getPlaneSubscriptionList")
  getPlaneSubscriptionList(
    @Body() planeSubscriptionRequest: PlaneSubcriptionDto
  ) {
    return this.planeSubscriptionService.getPlaneSubscriptionList(planeSubscriptionRequest);
  }
  @Post("addPlaneSubscriptionList")
  addPlaneSubscriptionList(
    @Body() planeSubscriptionRequest: PlaneSubcriptionDto
  ) {
    return this.planeSubscriptionService.addPlaneSubscriptionList(planeSubscriptionRequest);
  }
  @Post("removePlaneSubscriptionList")
  removePlaneSubscriptionList(
    @Body() planeSubscriptionRequest: PlaneSubcriptionDto
  ) {
    return this.planeSubscriptionService.removePlaneSubscriptionList(planeSubscriptionRequest);
  }
  @Post("updatePlaneSubscriptionList")
  updatePlaneSubscriptionList(
    @Body() planeSubscriptionRequest: PlaneSubcriptionDto
  ) {
    return this.planeSubscriptionService.updatePlaneSubscriptionList(planeSubscriptionRequest);
  }
}
 