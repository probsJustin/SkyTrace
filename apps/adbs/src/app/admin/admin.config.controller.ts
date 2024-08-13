import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AdminConfigService } from './admin.config.service';
import { ApiTags } from '@nestjs/swagger';
import { DeleteAdminConfigDto, GetAdminConfigDto, AdminConfigDto } from './types/admin.config.dto';

@ApiTags('ADMIN CONFIG')
@Controller("adminConfig")
export class AdminConfigController {
  constructor(private readonly adminConfigService: AdminConfigService) {}

  @Get("getAdminConfig")
  getConfig(
    @Body() configRequest: GetAdminConfigDto
  ) {
    return this.adminConfigService.getConfig(configRequest);
  }

  @Post("setAdminConfig")
  setConfig(
    @Body() configRequest: AdminConfigDto
  ) {
    return this.adminConfigService.setConfig(configRequest);
  }
  @Put("updateAdminConfig")
  updateConfig(
    @Body() configRequest: AdminConfigDto
  ) {
    return this.adminConfigService.updateConfig(configRequest);
  }
  @Delete("deleteAdminConfig")
  deleteConfig(
    @Body() configRequest: DeleteAdminConfigDto
  ) {
    return this.adminConfigService.deleteConfig(configRequest);
  }
}
 