import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { Controle } from '@prisma/client';
import { ControleService } from 'src/services/controle.service';

@Controller()
export class ControleController {
  constructor(private readonly controleService: ControleService) {}

  @Get('controle')
  async getControle(): Promise<Controle[]> {
    return this.controleService.controle({
      
    })
  }

  @Get('controles/:id_consultation')
  async getControleByConsultation(@Param('id_consultation') id_consultation: string): Promise<Controle[]> {
    const data = this.controleService.controle({
      where: {
        id_consultation,
      }
    })
    return data;
  }

  @Post('controle')
  async createControle(
    @Body() controleData: { id_consultation: string, date_controle: string, motif_controle: string, conduite: string, diagnostic: string, 
        prescripteur: string, userUpdate: string, userCreate: string },
  ): Promise<Controle> {
    console.log(controleData);
    return this.controleService.createControle(controleData);
  }

  @Put('updateControle/:id')
  async updateRdv(@Param('id') id: string, @Body() data: any): Promise<Controle> {
    console.log(data)
    return this.controleService.updateControle({
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

  @Delete('controle/:id')
  async deleteRdv(@Param('id') id: string): Promise<Controle> {
    return this.controleService.deleteControle({ id: id });
  }


}
