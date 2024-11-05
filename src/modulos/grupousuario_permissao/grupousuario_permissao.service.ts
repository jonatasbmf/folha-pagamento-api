import { Injectable } from '@nestjs/common';
import { CreateGrupousuarioPermissaoDto } from './dto/create-grupousuario_permissao.dto';
import { UpdateGrupousuarioPermissaoDto } from './dto/update-grupousuario_permissao.dto';

@Injectable()
export class GrupousuarioPermissaoService {
  create(createGrupousuarioPermissaoDto: CreateGrupousuarioPermissaoDto) {
    return 'This action adds a new grupousuarioPermissao';
  }

  findAll() {
    return `This action returns all grupousuarioPermissao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} grupousuarioPermissao`;
  }

  update(
    id: number,
    updateGrupousuarioPermissaoDto: UpdateGrupousuarioPermissaoDto,
  ) {
    return `This action updates a #${id} grupousuarioPermissao`;
  }

  remove(id: number) {
    return `This action removes a #${id} grupousuarioPermissao`;
  }
}
