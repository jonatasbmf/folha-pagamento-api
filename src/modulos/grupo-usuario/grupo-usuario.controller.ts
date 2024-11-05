import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GrupoUsuarioService } from './grupo-usuario.service';
import { CreateGrupoUsuarioDto } from './dto/create-grupo-usuario.dto';
import { UpdateGrupoUsuarioDto } from './dto/update-grupo-usuario.dto';

@Controller('grupo-usuario')
export class GrupoUsuarioController {
  constructor(private readonly grupoUsuarioService: GrupoUsuarioService) {}

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
