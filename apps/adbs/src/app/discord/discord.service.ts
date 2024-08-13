import { Injectable } from '@nestjs/common';
import { DiscordDto } from './types/discord.dto';
import { HttpService } from '@nestjs/axios';
import { InjectModel } from '@nestjs/sequelize';
import { InternalConfig } from '../config/types/internal.config.model';

@Injectable()
export class DiscordService {
  constructor(
    private httpService: HttpService,
    @InjectModel(InternalConfig)
    private readonly internalConfig: typeof InternalConfig,
    ){
  }

  async sendMessage(discordRequest: DiscordDto): Promise<void> {
    const tenantConfiguration = await this.internalConfig.findOne({
      where: {
        discordChannel: discordRequest.discordChannel
      }
    });    

    const discordWebHookUrl = "https://discord.com/api/webhooks/1272651457069449267/cpEUiJKm3qtMXJMr6056Fm-sPKMsj9nrQKKqQ-f0AU2cQeM3nQR4trRmsnrTMNM1uiQP";

    const payload = {
      content: discordRequest.message,
      username: "ADBS Exchange",  // Optional: customize the username
      //avatar_url: "https://path-to-your-avatar-image.png"  // Optional: customize the avatar
    };

    try {
      await this.httpService.post(tenantConfiguration.discordWebhook, payload).toPromise();
      console.log('Message sent successfully');
    } catch (error) {
      console.error('Failed to send message via webhook:', error);
    }
  }
}
