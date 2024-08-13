import { ApiProperty } from "@nestjs/swagger";


export class AvgDto {
    @ApiProperty({
        example: "E6"
    })
    type: string;

    @ApiProperty({
        example: "5"
    })
    days: string;
}