import { Injectable, Inject } from '@nestjs/common';
import { ConsultationEntity } from '../configurations/entities/consultation.entity';
import { UpdateConsultationsDto } from '../configurations/dto/consultation/update-consultations.dto';

@Injectable()
export class ConsultationService {
    constructor(
        @Inject('CONSULTATION_REPOSITORY')
        private consultationsRepository: typeof ConsultationEntity
      ) { }
    
      async create(patient: any): Promise<ConsultationEntity> {
        return this.consultationsRepository.create<ConsultationEntity>(patient)
      }
    
      async findAll(): Promise<ConsultationEntity[]> {
        return this.consultationsRepository.findAll<ConsultationEntity>();
      }
    
      async findOne(id: string): Promise<ConsultationEntity> {
        return await this.consultationsRepository.findOne<ConsultationEntity>({ where: { id } });
      }

      async findByuser(id_patient: string): Promise<ConsultationEntity[]> {
        return await this.consultationsRepository.findAll<ConsultationEntity>({ where: { id_patient: id_patient } });
      }
    
      async updateOne(patient: UpdateConsultationsDto, id: string) {
        return this.consultationsRepository.update(
            patient,
          {
            where: {
              id: id
            }
          })
      }
    
      async updateByEmail(patient: UpdateConsultationsDto, email: string) {
        return this.consultationsRepository.update(
            patient,
          {
            where: {
              email: email
            }
          })
      }
}