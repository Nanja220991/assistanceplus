import { Controller, Get, Post, Body, Put, Delete, Param, Patch } from '@nestjs/common';
import { CreatePatientsDto } from '../configurations/dto/patients/create-patients.dto';
import { PatientService } from '../services/patient.service';
import { UpdatePatientsDto } from '../configurations/dto/patients/update-patients.dto';

@Controller('patients')
export class PatientController {
  constructor(private readonly patientService: PatientService) { }

  @Post('add')
  create(@Body() user: CreatePatientsDto) {
    return this.patientService.create(user);
  }

  @Get('all')
  findAll() {
    return this.patientService.findAll();
  }

  @Get('get')
  findOne(@Body('id') id: string) {
    return this.patientService.findOne(id);
  }

  @Get('search/:value')
  search(@Param('value') value: string) {
    return this.patientService.search(value);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() user: UpdatePatientsDto) {
    return this.patientService.updateOne(user, id);
  }

  @Patch('email/:email')
  updateByEmail(@Param('email') email: string, @Body() user: UpdatePatientsDto) {
    return this.patientService.updateByEmail(user, email);
  }
}
