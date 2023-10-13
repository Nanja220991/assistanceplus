import { IsOptional } from "@nestjs/class-validator";

export class UpdateAppointmentsDto {

    @IsOptional()
    date: number;
  
    @IsOptional()
    heure_debut: string;
  
    @IsOptional()
    motif: string;
  
    @IsOptional()
    type: string;
  
    @IsOptional()
    docteur: string;
  
    @IsOptional()
    lien: string;
  
    @IsOptional()
    description: string;
  
    @IsOptional()
    patientId: string;

    @IsOptional()
    statut: string;
  
    @IsOptional()
    userCreate: string;
  
    @IsOptional()
    userUpdate: string;

}