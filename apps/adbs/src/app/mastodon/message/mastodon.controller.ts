import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MastodonService } from './mastodon.service';
import { MastodonDto } from './types/mastodon.dto';

@ApiTags('MASTODON')
@Controller("mastodon")
export class MastodonController {
  constructor(private readonly mastodonService: MastodonService) {}

  @Post("postMessage")
  postMessage(
    @Body() mastodonRequest: MastodonDto
  ) {
    return this.mastodonService.postMessage(mastodonRequest);
  }
}
 