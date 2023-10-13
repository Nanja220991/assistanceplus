import { IsNotEmpty } from "@nestjs/class-validator";

export class CreateAppointmentsDto {

  @IsNotEmpty()
  date: string;

  @IsNotEmpty()
  heure_debut: string;
  
  @IsNotEmpty()
  motif: string;

  @IsNotEmpty()
  type: string;

  @IsNotEmpty()
  docteur: string;

  @IsNotEmpty()
  lien: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  patientId: string;

  @IsNotEmpty()
  statut: string;

  @IsNotEmpty()
  userCreate: string;

  @IsNotEmpty()
  userUpdate: string;

}