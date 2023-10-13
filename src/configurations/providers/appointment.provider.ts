import { AppointmentEntity } from "../entities/appointment.entity";


export const appointmentsProviders = [
  {
    provide: 'APPOINTMENT_REPOSITORY',
    useValue: AppointmentEntity,
  },
];