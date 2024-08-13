import { ApiProperty } from "@nestjs/swagger";


export class InternalConfigDto {
    @ApiProperty({
        example: "ThugShakker"
    })
    tenant: string;

    @ApiProperty({
        example: "Something that doesnt matter...."
    })
    discordChannel: string;
    @ApiProperty({
        example: "Something that doesnt matter...."
    })
    discordAdmin: string;
    @ApiProperty({
        example: "Something that doesnt matter...."
    })
    discordWebhook: string;
}

export class DeleteInternalConfigDto {
    @ApiProperty({
        example: "ThugShakker"
    })
    discordChannel: string;
}

export class GetInternalConfigDto {
    @ApiProperty({
        example: "ThugShakker"
    })
    discordChannel: string;
}