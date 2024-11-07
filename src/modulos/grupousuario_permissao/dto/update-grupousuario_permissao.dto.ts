import { PartialType } from '@nestjs/mapped-types';
import { GrupousuarioPermissao } from '../entities/grupousuario_permissao.entity';

export class UpdateGrupousuarioPermissaoDto extends PartialType(
  GrupousuarioPermissao,
) {}
