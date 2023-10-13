import { IsNotEmpty } from "@nestjs/class-validator";

export class CreatePatientsDto {

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    nom: string;

    @IsNotEmpty()
    prenom: string;

    @IsNotEmpty()
    birthday: string;

    @IsNotEmpty()
    adress: string;

    @IsNotEmpty()
    contact: string;

    @IsNotEmpty()
    statut: boolean;

    @IsNotEmpty()
    userCreate: string;

    @IsNotEmpty()
    userUpdate: string;

}