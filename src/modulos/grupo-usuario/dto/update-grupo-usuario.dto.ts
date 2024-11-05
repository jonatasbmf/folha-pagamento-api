import { PartialType } from '@nestjs/mapped-types';
import { GrupoUsuario } from '../entities/grupo-usuario.entity';

export class UpdateGrupoUsuarioDto extends PartialType(GrupoUsuario) { }
