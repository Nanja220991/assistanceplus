import { ConsultationEntity } from "../entities/consultation.entity";


export const consultationsProviders = [
  {
    provide: 'CONSULTATION_REPOSITORY',
    useValue: ConsultationEntity,
  },
];