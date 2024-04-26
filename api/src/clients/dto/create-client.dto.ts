import { ApiProperty } from "@nestjs/swagger"

export class CreateClientDto {
    @ApiProperty()
    cin :string
    
    @ApiProperty()
    contact:string
}
