import { Module } from '@nestjs/common';
import { FelixjuniorModule } from './arquiteto/felixjunior/felixjunior.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, FelixjuniorModule],
  controllers: [],
  providers: [PrismaModule],
})
export class AppModule { }
