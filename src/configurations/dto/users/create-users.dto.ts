import { IsNotEmpty } from "@nestjs/class-validator";

export class CreateUsersDto {

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    role: string;

    @IsNotEmpty()
    statut: boolean;
    
}