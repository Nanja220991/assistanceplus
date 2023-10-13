import { IsOptional } from "@nestjs/class-validator";

export class UpdateUsersDto {

    @IsOptional()
    username: string;

    @IsOptional()
    password: string;

    @IsOptional()
    email: string;

    @IsOptional()
    role: string;

    @IsOptional()
    statut: boolean;

}