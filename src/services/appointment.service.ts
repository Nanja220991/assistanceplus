import { Injectable, Inject } from '@nestjs/common';
import { AppointmentEntity } from '../configurations/entities/appointment.entity';
import { UpdateAppointmentsDto } from '../configurations/dto/appointment/update-appointment.dto';

@Injectable()
export class AppointmentService {
    constructor(
        @Inject('APPOINTMENT_REPOSITORY')
        private appointmentsRepository: typeof AppointmentEntity
      ) { }
    
      async create(appointment: any): Promise<AppointmentEntity> {
        return this.appointmentsRepository.create<AppointmentEntity>(appointment)
      }
    
      async findAll(): Promise<AppointmentEntity[]> {
        return this.appointmentsRepository.findAll<AppointmentEntity>();
      }
    
      async findOne(id: string): Promise<AppointmentEntity> {
        return await this.appointmentsRepository.findOne<AppointmentEntity>({ where: { id } });
      }

      async findDoctor(docteur: string): Promise<AppointmentEntity[]> {
        return await this.appointmentsRepository.findAll<AppointmentEntity>({ where: { docteur: docteur } });
      }

      async findByuser(id_patient: string): Promise<AppointmentEntity[]> {
        return await this.appointmentsRepository.findAll<AppointmentEntity>({ where: { id_patient: id_patient } });
      }
    
      async updateOne(appointment: UpdateAppointmentsDto, id: string) {
        return this.appointmentsRepository.update(
            appointment,
          {
            where: {
              id: id
            }
          })
      }
}