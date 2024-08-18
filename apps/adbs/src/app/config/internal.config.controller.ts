import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { InternalConfigService } from './internal.config.service';
import { ApiTags } from '@nestjs/swagger';
import { DeleteInternalConfigDto, GetInternalConfigDto, InternalConfigDto } from './types/internal.config.dto';

@ApiTags('INTERNAL CONFIG')
@Controller("intenral_config")
export class InternalConfigController {
  constructor(private readonly internalConfigService: InternalConfigService) {}

  @Post("getConfig")
  getConfig(
    @Body() configRequest: GetInternalConfigDto
  ) {
    return this.internalConfigService.getConfig(configRequest);
  }

  @Post("setConfig")
  setConfig(
    @Body() configRequest: InternalConfigDto
  ) {
    return this.internalConfigService.setConfig(configRequest);
  }
  @Put("updateConfig")
  updateConfig(
    @Body() configRequest: InternalConfigDto
  ) {
    return this.internalConfigService.updateConfig(configRequest);
  }
  @Delete("deleteConfig")
  deleteConfig(
    @Body() configRequest: DeleteInternalConfigDto
  ) {
    return this.internalConfigService.deleteConfig(configRequest);
  }
}
 