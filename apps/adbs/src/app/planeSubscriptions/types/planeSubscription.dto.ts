import { ApiProperty } from "@nestjs/swagger";


export class PlaneSubcriptionDto {

    @ApiProperty({
        example: "admin"
    })
    planeType: string;
    @ApiProperty({
        example: "ThugShakker"
    })
    tenant: string;
    @ApiProperty({
        example: "ThugShakker"
    })
    discordServer: string;
    @ApiProperty({
        example: "ThugShakker"
    })
    discordAdmin: string;

}