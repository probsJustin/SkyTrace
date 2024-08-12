import { ApiProperty } from "@nestjs/swagger";


export class StatsDto {
    @ApiProperty({
        example: "E6"
    })
    Plane: string;

    @ApiProperty({
        example: "STD_DEV"
    })
    StatsType: string;
}