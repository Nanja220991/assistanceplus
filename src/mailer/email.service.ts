import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailService {

  constructor(private mailerService: MailerService) { }

  async sendEmail(data) {
    try {
      await this.mailerService.sendMail({
        to: data.to,
        subject: data.subject,
        template: 'confirmation',
        context: {
          name: data.name,
          date: data.date,
          heure: data.heure,
          doctor: data.doctor,
          paiement: data.paiement,
          tel: data.tel,
          type: data.type
        },
      });
    } catch(error) {
    return error.message
  }
}
}
