import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { PatientController } from './controllers/patient.controller';
import { PatientService } from './services/patient.service';
import { ConsultationController } from './controllers/consultation.controller';
import { ConsultationService } from './services/consultation.service';
import { RdvService } from './services/rdv.service';
import { RdvController } from './controllers/rendez_vous.controller';
import { FileController } from './controllers/file.controller';
import { FileService } from './services/file.service';
import { MulterModule } from '@nestjs/platform-express';
import { ControleController } from './controllers/controle.controller';
import { ControleService } from './services/controle.service';
import { EmailController } from './mailer/email.controller';
import { MailModule } from './mailer/email.module';
import { UsersService } from './services/user.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './services/auth.service';
import { databaseProviders } from './config/database.providers';
import { usersProviders } from './configurations/providers/users.provider';
import { EmailService } from './mailer/email.service';
import { patientsProviders } from './configurations/providers/patients.provider';
import { consultationsProviders } from './configurations/providers/consultations.provider';
import { AppointmentController } from './controllers/appointment.controller';
import { appointmentsProviders } from './configurations/providers/appointment.provider';
import { AppointmentService } from './services/appointment.service';

@Module({
  imports: [
    MailModule,
    JwtModule.register({
      secret: 'krr/BQpkW18rZB+kjULCJVt7qI2E1Cop6JvQINxRwZD4N9kIL0QLufaa8VUzPror/QWQsxxJWsBjEYp9wp9zRw==',
      signOptions: { expiresIn: '1d' },
    }),
    MulterModule.register({
    dest: './uploads'
  })],
  controllers: [UserController, EmailController, PatientController, ConsultationController, AppointmentController],
  providers: [ ...databaseProviders,...usersProviders, ...patientsProviders, ...consultationsProviders, ...appointmentsProviders, 
    UsersService, AuthService, EmailService, PatientService, ConsultationService, AppointmentService],
  exports: [UsersService, AuthService, PatientService, ConsultationService, AppointmentService]
})
export class AppModule {}
