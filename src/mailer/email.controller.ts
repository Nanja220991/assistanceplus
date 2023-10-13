// app.controller.ts
import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmailService } from '../mailer/email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send') 
  create(@Body() data) {
    return this.emailService.sendEmail(data);
  }
}
