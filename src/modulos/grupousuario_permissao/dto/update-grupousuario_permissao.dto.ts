import { PartialType } from '@nestjs/mapped-types';
import { CreateGrupousuarioPermissaoDto } from './create-grupousuario_permissao.dto';

export class UpdateGrupousuarioPermissaoDto extends PartialType(
  CreateGrupousuarioPermissaoDto,
) {}
