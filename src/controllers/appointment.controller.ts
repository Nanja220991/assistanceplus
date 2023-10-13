import { Controller, Get, Post, Body, Put, Delete, Param, Patch } from '@nestjs/common';
import { AppointmentService } from '../services/appointment.service';
import { CreateAppointmentsDto } from '../configurations/dto/appointment/create-appointment.dto';
import { UpdateAppointmentsDto } from '../configurations/dto/appointment/update-appointment.dto';

@Controller('appointments')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) { }

  @Post('add')
  create(@Body() appointment: CreateAppointmentsDto) {
    return this.appointmentService.create(appointment);
  }

  @Get('all')
  findAll() {
    return this.appointmentService.findAll();
  }

  @Get(':id_patient')
  findByUser(@Param('id_patient') id_patient: string) {
    return this.appointmentService.findByuser(id_patient);
  }

  @Get('doctor/:docteur')
  findDoctor(@Param('docteur') docteur: string) {
    return this.appointmentService.findDoctor(docteur);
  }

  @Get('get')
  findOne(@Body('id') id: string) {
    return this.appointmentService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() appointment: UpdateAppointmentsDto) {
    return this.appointmentService.updateOne(appointment, id);
  }
  

}
