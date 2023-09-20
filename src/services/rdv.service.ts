import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import  { Prisma, RendezVous } from '@prisma/client';

@Injectable()
export class RdvService {

    constructor(private prisma: PrismaService) {}

    async rdv(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.RendezVousWhereUniqueInput;
        where?: Prisma.RendezVousWhereInput;
        orderBy?: Prisma.RendezVousOrderByWithRelationInput;
    }): Promise<RendezVous[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.rendezVous.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async createRdv(data: Prisma.RendezVousCreateInput): Promise<RendezVous> {
        return this.prisma.rendezVous.create({
            data,
        })
    }

    async updateRdv(params: {
        where: Prisma.RendezVousWhereUniqueInput;
        data: Prisma.RendezVousUpdateInput;
    }): Promise<RendezVous> {
        const { where, data } = params;
        return this.prisma.rendezVous.update({
            data,
            where,
        });
    }

    async deleteRdv(where: Prisma.RendezVousWhereUniqueInput): Promise<RendezVous> {
        return this.prisma.rendezVous.delete({
            where,
        });
    }
}