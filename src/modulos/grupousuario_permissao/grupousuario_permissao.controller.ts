import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GrupousuarioPermissaoService } from './grupousuario_permissao.service';
import { CreateGrupousuarioPermissaoDto } from './dto/create-grupousuario_permissao.dto';
import { UpdateGrupousuarioPermissaoDto } from './dto/update-grupousuario_permissao.dto';

@Controller('grupousuario-permissao')
export class GrupousuarioPermissaoController {
  constructor(
    private readonly grupousuarioPermissaoService: GrupousuarioPermissaoService,
  ) {}

  @Post()
  create(
    @Body() createGrupousuarioPermissaoDto: CreateGrupousuarioPermissaoDto,
  ) {
    return this.grupousuarioPermissaoService.create(
      createGrupousuarioPermissaoDto,
    );
  }

  @Get()
  findAll() {
    return this.grupousuarioPermissaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.grupousuarioPermissaoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGrupousuarioPermissaoDto: UpdateGrupousuarioPermissaoDto,
  ) {
    return this.grupousuarioPermissaoService.update(
      +id,
      updateGrupousuarioPermissaoDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.grupousuarioPermissaoService.remove(+id);
  }
}
