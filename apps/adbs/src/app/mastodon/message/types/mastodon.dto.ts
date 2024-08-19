import { ApiProperty } from "@nestjs/swagger";


export class MastodonDto {
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
    mastodonMessage: string;
}