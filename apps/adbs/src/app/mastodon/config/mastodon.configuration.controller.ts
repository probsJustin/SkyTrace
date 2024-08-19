import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MastodonConfigurationService } from './mastodon.configuration.service';
import { MastodonConfigurationDto } from './types/mastodon.configuration.dto';

@ApiTags('MASTODON CONFIG')
@Controller("mastodon_config")
export class MastodonConfigurationController {
  constructor(private readonly mastodonConfigurationService: MastodonConfigurationService) {}

  @Post("getMastodonConfig")
  getMastodonConfig(
    @Body() mastodonConfigurationDto: MastodonConfigurationDto
  ) {
    return this.mastodonConfigurationService.getConfig(mastodonConfigurationDto);
  }

  @Post("setMastodonConfig")
  setMastodonConfig(
    @Body() mastodonConfigurationDto: MastodonConfigurationDto
  ) {
    return this.mastodonConfigurationService.setConfig(mastodonConfigurationDto);
  }
  @Put("updateMastodonConfig")
  updateMastodonConfig(
    @Body() mastodonConfigurationDto: MastodonConfigurationDto
  ) {
    return this.mastodonConfigurationService.updateConfig(mastodonConfigurationDto);
  }
  @Delete("deleteMastodonConfig")
  deleteMastodonConfig(
    @Body() mastodonConfigurationDto: MastodonConfigurationDto
  ) {
    return this.mastodonConfigurationService.deleteConfig(mastodonConfigurationDto);
  }
}
 