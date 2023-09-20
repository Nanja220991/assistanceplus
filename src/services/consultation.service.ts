import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import  { Consultation, Prisma } from '@prisma/client';

@Injectable()
export class ConsultationService {

    constructor(private prisma: PrismaService) {}

    async consultation(
        consultationWhereUniqueInput: Prisma.ConsultationWhereUniqueInput,
    ): Promise<Consultation | null> {
        return this.prisma.consultation.findUnique({
            where: consultationWhereUniqueInput,
        });
    }

    async consultations(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.ConsultationWhereUniqueInput;
        where?: Prisma.ConsultationWhereInput;
        orderBy?: Prisma.ConsultationOrderByWithRelationInput;
    }): Promise<Consultation[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.consultation.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async createConsultation(data: Prisma.ConsultationCreateInput): Promise<Consultation> {
        const result = this.prisma.consultation.create({
            data,
        })
        return result
    }

    async updateConsultation(params: {
        where: Prisma.ConsultationWhereUniqueInput;
        data: Prisma.ConsultationUpdateInput;
    }): Promise<Consultation> {
        const { where, data } = params;
        return this.prisma.consultation.update({
            data,
            where,
        });
    }

    async deleteConsultation(where: Prisma.ConsultationWhereUniqueInput): Promise<Consultation> {
        return this.prisma.consultation.delete({
            where,
        });
    }
}