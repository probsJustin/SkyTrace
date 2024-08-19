import { Body, Controller, Post } from '@nestjs/common';
import { DiscordService } from './discord.service';
import { ApiTags } from '@nestjs/swagger';
import { DiscordDto } from './types/discord.dto';

@ApiTags('DISCORD')
@Controller("discord")
export class DiscordController {
  constructor(private readonly discordService: DiscordService) {}

  @Post("sendMessage")
  sendMessage(
    @Body() discordRequest: DiscordDto
  ) {
    return this.discordService.sendMessage(discordRequest);
  }

  @Post("sendGlobalAdminMessage")
  sendGlobalAdminMessage(
    @Body() discordRequest: DiscordDto
  ) {
    return this.discordService.sendMessage(discordRequest);
  }

  @Post("sendChannelAdminMessage")
  sendChannelAdminMessage(
    @Body() discordRequest: DiscordDto
  ) {
    return this.discordService.sendMessage(discordRequest);
  }

  @Post("sendSupportAdminMessage")
  sendSupportAdminMessage(
    @Body() discordRequest: DiscordDto
  ) {
    return this.discordService.sendMessage(discordRequest);
  }
}
 