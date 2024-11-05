import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreatePermissaoDto } from './dto/create-permissao.dto';
import { UpdatePermissaoDto } from './dto/update-permissao.dto';
import { PermissaoService } from './permissao.service';

@Controller('permissao')
export class PermissaoController {
  constructor(private readonly permissaoService: PermissaoService) { }

  @Post()
  create(@Body() createPermissaoDto: CreatePermissaoDto) {
    return this.permissaoService.create(createPermissaoDto);
  }

  @Get()
  findAll() {
    return this.permissaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.permissaoService.findOne(+id);
  }

  @Get('buscar/:nome')
  findNomeParametro(@Param('nome') nome: string) {
    return this.permissaoService.findPorNome(nome);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePermissaoDto: UpdatePermissaoDto) {
    return this.permissaoService.update(+id, updatePermissaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.permissaoService.remove(+id);
  }
}
