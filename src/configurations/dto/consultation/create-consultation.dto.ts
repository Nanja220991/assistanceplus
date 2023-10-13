import { IsNotEmpty } from "@nestjs/class-validator";

export class CreateConsultationsDto {

  @IsNotEmpty()
  id_patient: string;

  @IsNotEmpty()
  date_consultation: string;
  
  @IsNotEmpty()
  motif: string;

  @IsNotEmpty()
  histo: string;

  @IsNotEmpty()
  info_paraclinique: string;

  @IsNotEmpty()
  info_clinique: string;

  @IsNotEmpty()
  conduite: string;

  @IsNotEmpty()
  diagnostic: string;

  @IsNotEmpty()
  statut: string;

  @IsNotEmpty()
  userCreate: string;

  @IsNotEmpty()
  userUpdate: string;

}