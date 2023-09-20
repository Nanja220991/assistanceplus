import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { Patient as PatientModel, RendezVous } from '@prisma/client';
import { RdvService } from 'src/services/rdv.service';

@Controller()
export class RdvController {
  constructor(private readonly rdvService: RdvService) {}

  @Get('rdv')
  async getRdv(): Promise<RendezVous[]> {
    return this.rdvService.rdv({
      
    })
  }

  @Get('rdv/:id')
  async getRdvById(@Param('id') id: string): Promise<RendezVous[]> {
    const data = this.rdvService.rdv({
      where: {
        id,
      }
    })
    return data;
  }

  @Post('rdv')
  async createRdv(
    @Body() rdvData: { date: string, heure_debut: string, type: string, docteur: string, lien: string, 
      description: string, id_patient: string, userUpdate: string, userCreate: string },
  ): Promise<RendezVous> {
    console.log(rdvData)
    return this.rdvService.createRdv(rdvData);
  }

  @Put('updateRdv/:id')
  async updateRdv(@Param('id') id: string, @Body() data: any): Promise<RendezVous> {
    console.log(data)
    return this.rdvService.updateRdv({
      where: { id: id },
      data: data,
    });
  }

  /*@Get('filtered-patient/:searchString')
  async getFilteredPatients(@Param('searchString') searchString: string): Promise<PatientModel[]> {
    return this.patientService.patients({
      where: {
        OR: [
          {
            nom: { contains: searchString }
          },
          {
            prenom: { contains: searchString }
          }
        ]
      }
    })
  }*/

  @Delete('rdv/:id')
  async deleteRdv(@Param('id') id: string): Promise<RendezVous> {
    return this.rdvService.deleteRdv({ id: id });
  }


}
