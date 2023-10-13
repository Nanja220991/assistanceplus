import { PatientEntity } from "../entities/patient.entity";

export const patientsProviders = [
  {
    provide: 'PATIENT_REPOSITORY',
    useValue: PatientEntity,
  },
];