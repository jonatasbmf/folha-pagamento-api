import { PartialType } from '@nestjs/mapped-types';
import { IsOptional } from 'class-validator';
import { UsuarioDto } from './usuario.dto';

export class UpdateUsuarioDto extends PartialType(UsuarioDto) {
    @IsOptional()
    id?: number;

    @IsOptional()
    senha?: string;

    @IsOptional()
    salt?: string;
}
