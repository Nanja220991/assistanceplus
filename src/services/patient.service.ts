import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import  { Patient, Prisma } from '@prisma/client';
import { throwError } from 'rxjs';

@Injectable()
export class PatientService {

    constructor(private prisma: PrismaService) {}

    async patients(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.PatientWhereUniqueInput;
        where?: Prisma.PatientWhereInput;
        orderBy?: Prisma.PatientOrderByWithRelationInput;
    }): Promise<Patient[]> {
        const { skip, take, cursor, where, orderBy } = params;
        console.log(params);
        return this.prisma.patient.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async createPatient(data: Prisma.PatientCreateInput): Promise<Patient> {
       const result = this.patients({
            where: {
                email: data.email
            }
        })
        if (!result) {
            return this.prisma.patient.create({
                data,
            })
        }
            
       
    }

    async updatePatient(params: {
        where: Prisma.PatientWhereUniqueInput;
        data: Prisma.PatientUpdateInput;
    }): Promise<Patient> {
        const { where, data } = params;
        return this.prisma.patient.update({
            data,
            where,
        });
    }

    async deletePatient(where: Prisma.PatientWhereUniqueInput): Promise<Patient> {
        return this.prisma.patient.delete({
            where,
        });
    }
}