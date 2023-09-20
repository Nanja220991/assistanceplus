import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { PrismaService } from './prisma.service';
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

@Module({
  imports: [
    MulterModule.register({
    dest: './uploads'
  })],
  controllers: [UserController, PatientController, ConsultationController, RdvController, FileController, ControleController],
  providers: [UserService, PatientService, ConsultationService, RdvService, FileService, ControleService, PrismaService],
})
export class AppModule {}
