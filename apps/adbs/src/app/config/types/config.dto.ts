import { ApiProperty } from "@nestjs/swagger";


export class ConfigDto {
    @ApiProperty({
        example: "ThugShakker"
    })
    DiscordChannel: string;

    @ApiProperty({
        example: "Something that doesnt matter...."
    })
    Message: string;
}