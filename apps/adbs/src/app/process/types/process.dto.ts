import { ApiProperty } from "@nestjs/swagger";


export class ProcessDto {
    @ApiProperty({
        example: "TEX2"
    })
    type: string;
    @ApiProperty({
        example: "5"
    })
    timeFrame: string;
}