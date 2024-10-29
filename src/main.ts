import { NestFactory } from '@nestjs/core';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import { AppModule } from './app.module';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
