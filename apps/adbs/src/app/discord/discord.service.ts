import { Injectable } from '@nestjs/common';
import { DiscordDto } from './types/discord.dto';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class DiscordService {
  constructor(private httpService: HttpService){
  }
  public discordWebHookUrl = "https://discord.com/api/webhooks/1272651457069449267/cpEUiJKm3qtMXJMr6056Fm-sPKMsj9nrQKKqQ-f0AU2cQeM3nQR4trRmsnrTMNM1uiQP";

  getData(): { message: string } {
    return ({ message: 'Hello API' });
  }  
  async sendMessage(discordRequest: DiscordDto): Promise<void> {
    const payload = {
      content: discordRequest.message,
      username: "ADBS Exchange",  // Optional: customize the username
      //avatar_url: "https://path-to-your-avatar-image.png"  // Optional: customize the avatar
    };

    try {
      await this.httpService.post(this.discordWebHookUrl, payload).toPromise();
      console.log('Message sent successfully');
    } catch (error) {
      console.error('Failed to send message via webhook:', error);
    }
  }
}
