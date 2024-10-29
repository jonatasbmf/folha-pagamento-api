import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateEmpresaDto } from './create-empresa.dto';

export class UpdateEmpresaDto extends PartialType(CreateEmpresaDto) {
    @IsOptional()
    @IsNumber()
    id?: number;

    @IsOptional()
    @IsString()
    nome?: string;

    @IsOptional()
    @IsString()
    razao_social?: string;

    @IsOptional()
    @IsString()
    email?: string;
}