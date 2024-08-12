import { ApiProperty } from "@nestjs/swagger";


export class DiscordDto {
    @ApiProperty({
        example: "ThugShakker"
    })
    DiscordChannel: string;

    @ApiProperty({
        example: "Something that doesnt matter...."
    })
    Message: string;
}