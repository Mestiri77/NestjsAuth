import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsString } from "class-validator"

export class CreateAuthDto {
    @ApiProperty()
    @IsEmail()
    email : string 
    @ApiProperty()
    @IsString()
    password : string 
}
