import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import { AppModule } from './app.module';
import { FelixjuniorService } from './arquiteto/felixjunior/felixjunior.service';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Preparar as migrações
  const felixjunior = app.get(FelixjuniorService)
  felixjunior.runMigrations();

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
