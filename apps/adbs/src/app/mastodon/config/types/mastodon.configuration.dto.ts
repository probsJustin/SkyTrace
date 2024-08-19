import { ApiProperty } from "@nestjs/swagger";


export class MastodonConfigurationDto {
    @ApiProperty({
        example: "admin"
    })
    tenant: string;

    @ApiProperty({
        example: "ThugShakker"
    })
    mastodonAccount: string;

    @ApiProperty({
        example: "ThugShakker"
    })
    mastodonApiKey: string;

    @ApiProperty({
        example: "Something that doesnt matter...."
    })
    mastodonApiUrl: string;
}