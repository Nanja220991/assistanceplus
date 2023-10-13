import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';

import { join } from 'path';
import { EmailService } from './email.service';
 
@Module({ 
  imports: [
    MailerModule.forRoot({
      transport: { 
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'dsi.assistanceplus@gmail.com',
          pass: 'dwihyruljanjvppc',
        },
      },
      defaults: {
        from: '"ASSISTANCE + - PRISE DE RENDEZ-VOUS" <dsi.assistanceplus@gmail.com>',
      },
      template: {
        dir: join(__dirname, '/templates'),
        adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
        options: {
          strict: false,
        },
      },
    })
  ],
  providers: [EmailService],
  exports: [EmailService], // 👈 export for DI
})
export class MailModule {}