import { ApiProperty } from "@nestjs/swagger";


export class AdbsDto {
    @ApiProperty({
        example: "A || B"
    })
    JobCode: string;
}