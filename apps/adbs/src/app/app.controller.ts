import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("DEFAULT")
@Controller("default")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
}
 