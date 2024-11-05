import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateFuncionarioDto } from './create-funcionario.dto';

export class UpdateFuncionarioDto extends PartialType(CreateFuncionarioDto) {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsOptional()
  @IsString()
  nome?: string;

  @IsOptional()
  @IsNumber()
  salario?: number;

  @IsOptional()
  @IsNumber()
  empresaId?: number;
}
