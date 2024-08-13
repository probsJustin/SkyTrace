import { Injectable } from '@nestjs/common';
import { DiscordDto } from './types/discord.dto';
import { HttpService } from '@nestjs/axios';
import { InjectModel } from '@nestjs/sequelize';
import { InternalConfig } from '../config/types/internal.config.model';
import { AdminConfig } from '../admin/types/admin.config.model';

@Injectable()
export class DiscordService {
  constructor(
    private httpService: HttpService,
    @InjectModel(InternalConfig)
    private readonly internalConfig: typeof InternalConfig,
    @InjectModel(AdminConfig)
    private readonly adminConfig: typeof AdminConfig,
    ){
  }

  async sendMessage(discordRequest: DiscordDto): Promise<void> {
    const tenantConfiguration = await this.internalConfig.findOne({
      where: {
        discordChannel: discordRequest.discordChannel
      }
    });    

    const payload = {
      content: discordRequest.discordMessage,
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
  async sendAdminMessage(discordRequest: DiscordDto): Promise<void> {
    const tenantConfiguration = await this.adminConfig.findOne({
      where: {
        tenant: "admin" 
      }
    });    

    const payload = {
      content: discordRequest.discordMessage,
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
