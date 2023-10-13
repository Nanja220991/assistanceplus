import { IsOptional } from "@nestjs/class-validator";

export class UpdatePatientsDto {

    @IsOptional()
    email: string;

    @IsOptional()
    nom: string;

    @IsOptional()
    prenom: string;

    @IsOptional()
    birthday: string;

    @IsOptional()
    adress: string;

    @IsOptional()
    contact: string;

    @IsOptional()
    statut: boolean;

    @IsOptional()
    userCreate: string;

    @IsOptional()
    userUpdate: string;

}