import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DiscordConfigurationService } from './discord.configuration.service';
import { DiscordConfigurationDto } from './types/discord.configuration.dto';

@ApiTags('DISCORD CONFIG')
@Controller("discord_config")
export class DiscordConfigurationController {
  constructor(private readonly discordConfigurationService: DiscordConfigurationService) {}

  @Post("getDiscordConfig")
  getDiscordConfig(
    @Body() discordConfigurationDto: DiscordConfigurationDto
  ) {
    return this.discordConfigurationService.getConfig(discordConfigurationDto);
  }

  @Post("setDiscordConfig")
  setDiscordConfig(
    @Body() discordConfigurationDto: DiscordConfigurationDto
  ) {
    return this.discordConfigurationService.setConfig(discordConfigurationDto);
  }
  @Put("updateDiscordConfig")
  updateDiscordConfig(
    @Body() discordConfigurationDto: DiscordConfigurationDto
  ) {
    return this.discordConfigurationService.updateConfig(discordConfigurationDto);
  }
  @Delete("deleteDiscordConfig")
  deleteDiscordConfig(
    @Body() discordConfigurationDto: DiscordConfigurationDto
  ) {
    return this.discordConfigurationService.deleteConfig(discordConfigurationDto);
  }
}
 