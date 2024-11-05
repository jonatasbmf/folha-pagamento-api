import { Module } from '@nestjs/common';
import { GrupoUsuarioService } from './grupo-usuario.service';
import { GrupoUsuarioController } from './grupo-usuario.controller';

@Module({
  controllers: [GrupoUsuarioController],
  providers: [GrupoUsuarioService],
})
export class GrupoUsuarioModule {}
