import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Consultation, Fichiers, Prisma } from '@prisma/client';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { randomUUID } from 'crypto';

@Injectable()
export class FileService {

    constructor(private prisma: PrismaService) { }

   

}