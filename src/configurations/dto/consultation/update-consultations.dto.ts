import { IsOptional } from "@nestjs/class-validator";

export class UpdateConsultationsDto {

    @IsOptional()
    id: number;
  
    @IsOptional()
    date_consultation: string;
    
    @IsOptional()
    id_patient: string;
  
    @IsOptional()
    motif: string;
  
    @IsOptional()
    histo: string;
  
    @IsOptional()
    info_paraclinique: string;
  
    @IsOptional()
    info_clinique: string;
  
    @IsOptional()
    conduite: string;
  
    @IsOptional()
    diagnostic: string;
  
    @IsOptional()
    statut: string;
  
    @IsOptional()
    userCreate: string;
  
    @IsOptional()
    userUpdate: string;

}