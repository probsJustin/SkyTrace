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

    @ApiProperty({
        example: "Something that doesnt matter...."
    })
    discordServer: string;

    @ApiProperty({
        example: "Something that doesnt matter...."
    })
    adbsApiToken: string;
}

export class DeleteInternalConfigDto {
    @ApiProperty({
        example: "ThugShakker"
    })
    discordServer: string;
}

export class GetInternalConfigDto {
    @ApiProperty({
        example: "ThugShakker"
    })
    discordServer: string;
}