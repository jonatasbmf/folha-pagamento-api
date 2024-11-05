import { Module } from '@nestjs/common';
import { GrupousuarioPermissaoService } from './grupousuario_permissao.service';
import { GrupousuarioPermissaoController } from './grupousuario_permissao.controller';

@Module({
  controllers: [GrupousuarioPermissaoController],
  providers: [GrupousuarioPermissaoService],
})
export class GrupousuarioPermissaoModule {}
