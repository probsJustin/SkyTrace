import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AdminConfigService } from './admin.config.service';
import { ApiTags } from '@nestjs/swagger';
import { DeleteAdminConfigDto, GetAdminConfigDto, AdminConfigDto } from './types/admin.config.dto';

@ApiTags('CONFIG')
@Controller("config")
export class AdminConfigController {
  constructor(private readonly adminConfigService: AdminConfigService) {}

  @Get("getConfig")
  getConfig(
    @Body() configRequest: GetAdminConfigDto
  ) {
    return this.adminConfigService.getConfig(configRequest);
  }

  @Post("setConfig")
  setConfig(
    @Body() configRequest: AdminConfigDto
  ) {
    return this.adminConfigService.setConfig(configRequest);
  }
  @Put("updateConfig")
  updateConfig(
    @Body() configRequest: AdminConfigDto
  ) {
    return this.adminConfigService.updateConfig(configRequest);
  }
  @Delete("deleteConfig")
  deleteConfig(
    @Body() configRequest: DeleteAdminConfigDto
  ) {
    return this.adminConfigService.deleteConfig(configRequest);
  }
}
 