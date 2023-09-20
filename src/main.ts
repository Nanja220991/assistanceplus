import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as multer from 'multer';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as mime from 'mime-types'
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {cors: true, bodyParser: true});
  app.use(multer({ dest: './uploads', storage: multer.diskStorage({
    destination: './uploads',
    filename: function (req, file, cb) {
      (err, raw) => {
        console.log(req);
        cb(null, raw.toString('hex') + Date.now() + '.' + mime.extension(file.mimetype));
      };
    }
  })}).single('file'));

  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
