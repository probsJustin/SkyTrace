import { Injectable } from '@nestjs/common';
import { DiscordDto } from './types/discord.dto';

@Injectable()
export class DiscordService {
  getData(): { message: string } {
    return ({ message: 'Hello API' });
  }
  
  sendMessage(discordRequest: DiscordDto): {message: string } {
    return ({ message: 'Hello API' });
  }
}
