import { Module } from '@nestjs/common';
import { FelixjuniorService } from './felixjunior.service';

@Module({
  providers: [FelixjuniorService],
  exports: [FelixjuniorService]
})
export class FelixjuniorModule { }
