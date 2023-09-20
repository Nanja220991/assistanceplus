import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { Consultation as ConsultationModel } from '@prisma/client';
import { ConsultationService } from 'src/services/consultation.service';

@Controller()
export class ConsultationController {
  constructor(private readonly consultationService: ConsultationService) {}

  @Get('consultations')
  async getConsultations(): Promise<ConsultationModel[]> {
    const data = this.consultationService.consultations({});
    return data;
  }

  @Get('consultation/:id')
  async getPatientById(@Param('id') id: string): Promise<ConsultationModel[]> {
    const data = this.consultationService.consultations({
      where: {
        id,
      }
    })
    return data;
  }

  @Get('consultations/:patientId')
  async getPatientByIdPatient(@Param('patientId') patientId: string): Promise<ConsultationModel[]> {
    const data = this.consultationService.consultations({
      where: {
        patientId,
      }
    })
    return data;
  }

  @Post('consultation')
  async createConsultation(
    @Body() consultationsData: { ref_dossier: string, date_consult: string, motif: string, histo: string, patientId: string, 
      clinique: string, paraclinique: string, conduite: string, diagnostic: string, prescripteur: string, userUpdate: string, userCreate: string },
  ): Promise<ConsultationModel> {
    return this.consultationService.createConsultation(consultationsData);
  }

  @Put('updateConsultation/:id')
  async updateConsultation(@Param('id') id: string, @Body() data: any): Promise<ConsultationModel> {
    return this.consultationService.updateConsultation({
      where: { id: id },
      data: data,
    });
  }

  @Get('filtered-consultation/:searchString')
  async getFilteredConsultations(@Param('searchString') searchString: string): Promise<ConsultationModel[]> {
    return this.consultationService.consultations({
      where: {
        OR: [
          {
            ref_dossier: { contains: searchString }
          },
          {
            motif: { contains: searchString }
          },
          {
            paraclinique: { contains: searchString }
          }
        ]
      }
    })
  }

  @Delete('user/:id')
  async deletePatient(@Param('id') id: string): Promise<ConsultationModel> {
    return this.consultationService.deleteConsultation({ id: id });
  }


}
