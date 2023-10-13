import { Injectable, Inject } from '@nestjs/common';
import { PatientEntity } from '../configurations/entities/patient.entity';
import { UpdatePatientsDto } from 'src/configurations/dto/patients/update-patients.dto';
import { Op } from 'sequelize';

@Injectable()
export class PatientService {
  constructor(
    @Inject('PATIENT_REPOSITORY')
    private patientsRepository: typeof PatientEntity
  ) { }

  async create(patient: any): Promise<PatientEntity> {
    return this.patientsRepository.create<PatientEntity>(patient)
  }

  async findAll(): Promise<PatientEntity[]> {
    return this.patientsRepository.findAll<PatientEntity>();
  }

  async search(value: string): Promise<PatientEntity[]> {
    return this.patientsRepository.findAll<PatientEntity>({
      where: {
        [Op.or]: [
          {
            nom: {
              [Op.like]: `%${value}%`
            }
          },
          {
            prenom: {
              [Op.like]: `%${value}%`
            }
          },
          {
            contact: {
              [Op.like]: `%${value}%`
            }
          },
          {
            adress: {
              [Op.like]: `%${value}%`
            }
          },
        ],

      }
    });
  }

  async findOne(id: string): Promise<PatientEntity> {
    return await this.patientsRepository.findOne<PatientEntity>({ where: { id } });
  }

  async updateOne(patient: UpdatePatientsDto, id: string) {
    return this.patientsRepository.update(
      patient,
      {
        where: {
          id: id
        }
      })
  }

  async updateByEmail(patient: UpdatePatientsDto, email: string) {
    return this.patientsRepository.update(
      patient,
      {
        where: {
          email: email
        }
      })
  }
}