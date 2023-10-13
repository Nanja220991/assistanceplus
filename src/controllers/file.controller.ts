import { Controller, Get, Post, Body, Put, Delete, Param, UseInterceptors, UploadedFile, UploadedFiles } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { FileService } from 'src/services/file.service';
import * as mime from 'mime-types'

@Controller()
export class FileController {
  constructor(private readonly fileService: FileService) {}

  /*@Post('create')
  createFile(@Body() fileData: {id_patient: string, description: string, base64File: Buffer, userUpdate: string, userCreate: string}): Promise<Fichiers> {
    return this.fileService.createFile(fileData);
  }*/

  @Post('uploadFile')
  @UseInterceptors(
    FileInterceptor('file')
  )
  async uploadedFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file)
  }
}