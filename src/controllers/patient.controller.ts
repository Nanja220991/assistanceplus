import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { Patient as PatientModel } from '@prisma/client';
import { PatientService } from 'src/services/patient.service';

@Controller()
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Get('patients')
  async getPatients(): Promise<PatientModel[]> {
    return this.patientService.patients({})
  }

  @Get('patient/:id')
  async getPatientById(@Param('id') id: string): Promise<PatientModel[]> {
    const data = this.patientService.patients({
      where: {
        id,
      }
    })
    return data;
  }

  @Post('patient')
  async createPatient(
    @Body() patientData: { email: string, nom: string, prenom: string, birthday: string, adress: string, contact: string, statut: boolean, userUpdate: string, userCreate: string },
  ): Promise<PatientModel> {
    return this.patientService.createPatient(patientData);
  }

  @Put('updatePatient/:id')
  async publishPost(@Param('id') id: string, @Body() data: any): Promise<PatientModel> {
    console.log(data)
    return this.patientService.updatePatient({
      where: { id: id },
      data: data,
    });
  }

  @Get('filtered-patient/:searchString')
  async getFilteredPatients(@Param('searchString') searchString: string): Promise<PatientModel[]> {
    return this.patientService.patients({
      where: {
        OR: [
          {
            nom: { contains: searchString }
          },
          {
            prenom: { contains: searchString }
          },
          {
            email: { contains: searchString }
          },
          {
            adress: { contains: searchString }
          },
          {
            contact: { contains: searchString }
          }
        ]
      }
    })
  }

  @Delete('user/:id')
  async deletePatient(@Param('id') id: string): Promise<PatientModel> {
    return this.patientService.deletePatient({ id: id });
  }


}
