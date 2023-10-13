import { Injectable } from '@nestjs/common';

@Injectable()
export class ControleService {
/*
    constructor(private prisma: PrismaService) {}

    async controle(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.ControleWhereUniqueInput;
        where?: Prisma.ControleWhereInput;
        orderBy?: Prisma.ControleOrderByWithRelationInput;
    }): Promise<Controle[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.controle.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async createControle(data: Prisma.ControleCreateInput): Promise<Controle> {
        return this.prisma.controle.create({
            data,
        })
    }

    async updateControle(params: {
        where: Prisma.ControleWhereUniqueInput;
        data: Prisma.ControleUpdateInput;
    }): Promise<Controle> {
        const { where, data } = params;
        return this.prisma.controle.update({
            data,
            where,
        });
    }

    async deleteControle(where: Prisma.ControleWhereUniqueInput): Promise<Controle> {
        return this.prisma.controle.delete({
            where,
        });
    }*/
}