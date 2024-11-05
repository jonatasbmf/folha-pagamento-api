import { PartialType } from '@nestjs/mapped-types';
import { Permissao } from '../entities/permissao.entity';

export class UpdatePermissaoDto extends PartialType(Permissao) { }
