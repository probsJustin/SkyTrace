import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ApiTags } from '@nestjs/swagger';
import { ConfigDto } from './types/config.dto';

@ApiTags('CONFIG')
@Controller("config")
export class ConfigController {
  constructor(private readonly configService: ConfigService) {}

  @Get("getConfig")
  getConfig() {
    return this.configService.getConfig();
  }

  @Post("setConfig")
  setConfig(
    @Body() configRequest: ConfigDto
  ) {
    return this.configService.setConfig(configRequest);
  }
  @Put("updateConfig")
  updateConfig(
    @Body() configRequest: ConfigDto
  ) {
    return this.configService.updateConfig(configRequest);
  }
  @Delete("deleteConfig")
  deleteConfig(
    @Body() configRequest: ConfigDto
  ) {
    return this.configService.deleteConfig(configRequest);
  }
}
 