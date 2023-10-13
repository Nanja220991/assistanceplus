import { Controller, Get, Post, Body, Put, Delete, Param, Patch } from '@nestjs/common';
import { CreateConsultationsDto } from '../configurations/dto/consultation/create-consultation.dto';
import { UpdateConsultationsDto } from '../configurations/dto/consultation/update-consultations.dto';
import { ConsultationService } from '../services/consultation.service';

@Controller('consultations')
export class ConsultationController {
  constructor(private readonly consultationService: ConsultationService) { }

  @Post('add')
  create(@Body() consultation: CreateConsultationsDto) {
    return this.consultationService.create(consultation);
  }

  @Get('all')
  findAll() {
    return this.consultationService.findAll();
  }

  @Get(':id_patient')
  findByUser(@Param('id_patient') id_patient: string) {
    console.log(id_patient)
    return this.consultationService.findByuser(id_patient);
  }

  @Get('get')
  findOne(@Body('id') id: string) {
    return this.consultationService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() consultation: UpdateConsultationsDto) {
    return this.consultationService.updateOne(consultation, id);
  }
  

}
