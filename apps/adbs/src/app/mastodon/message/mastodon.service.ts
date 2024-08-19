import { Injectable } from '@nestjs/common';
import { MastodonDto } from './types/mastodon.dto';
import { HttpService } from '@nestjs/axios';
import { InjectModel } from '@nestjs/sequelize';
import { AdminConfig } from '../../admin/types/admin.config.model';
import { InternalConfig } from '../../config/types/internal.config.model';
import { DiscordConfig } from '../../discord/configuration/types/discord.configuration.model';
import { MastodonConfig } from '../config/types/mastodon.configuration.model';


@Injectable()
export class MastodonService {
  constructor(
    private httpService: HttpService,
    @InjectModel(InternalConfig)
    private readonly internalConfig: typeof InternalConfig,
    @InjectModel(AdminConfig)
    private readonly adminConfig: typeof AdminConfig,
    @InjectModel(DiscordConfig)
    private readonly discordConfig: typeof DiscordConfig,
    @InjectModel(MastodonConfig)
    private readonly mastodonConfig: typeof MastodonConfig,
    ){
  }

  async postMessage(mastodonRequest: MastodonDto): Promise<boolean> {
    return true;
  }
}
