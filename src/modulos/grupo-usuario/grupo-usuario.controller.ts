import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateGrupoUsuarioDto } from './dto/create-grupo-usuario.dto';
import { UpdateGrupoUsuarioDto } from './dto/update-grupo-usuario.dto';
import { GrupoUsuarioService } from './grupo-usuario.service';

@Controller('grupo-usuario')
export class GrupoUsuarioController {
  constructor(private readonly grupoUsuarioService: GrupoUsuarioService) { }

  @Post()
  create(@Body() createGrupoUsuarioDto: CreateGrupoUsuarioDto) {
    return this.grupoUsuarioService.create(createGrupoUsuarioDto);
  }

  @Get()
  findAll() {
    return this.grupoUsuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.grupoUsuarioService.findOne(+id);
  }

  @Get('buscar/:nome')
  buscarPorNome(@Param('nome') nome: string) {
    return this.grupoUsuarioService.buscarPorNome(nome);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGrupoUsuarioDto: UpdateGrupoUsuarioDto,
  ) {
    return this.grupoUsuarioService.update(+id, updateGrupoUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.grupoUsuarioService.remove(+id);
  }
}
