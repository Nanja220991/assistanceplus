import { Sequelize } from 'sequelize-typescript';
import { UserEntity } from '../configurations/entities/user.entity';
import { PatientEntity } from '../configurations/entities/patient.entity';
import { ConsultationEntity } from '../configurations/entities/consultation.entity';
import { AppointmentEntity } from '../configurations/entities/appointment.entity';


export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'assiqkps_medapi',
        password: 'qTw@rL_BMg,w11JF',
        database: 'asskiqkps_medmanager_local',
      });
      sequelize.addModels([UserEntity, PatientEntity, ConsultationEntity, AppointmentEntity]);
      await sequelize.sync();
      return sequelize;
    },
  },
];