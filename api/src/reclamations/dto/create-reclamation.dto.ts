import { ApiProperty } from "@nestjs/swagger";

export class CreateReclamationDto {
    
@ApiProperty()
refRec: string;

@ApiProperty()
description: string;

@ApiProperty()
observation: string;

@ApiProperty()
documentURL: string;

@ApiProperty()
status: string;

}
