import { Injectable } from '@nestjs/common';
import { CreateGrupoUsuarioDto } from './dto/create-grupo-usuario.dto';
import { UpdateGrupoUsuarioDto } from './dto/update-grupo-usuario.dto';

@Injectable()
export class GrupoUsuarioService {
  create(createGrupoUsuarioDto: CreateGrupoUsuarioDto) {
    return 'This action adds a new grupoUsuario';
  }

  findAll() {
    return `This action returns all grupoUsuario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} grupoUsuario`;
  }

  update(id: number, updateGrupoUsuarioDto: UpdateGrupoUsuarioDto) {
    return `This action updates a #${id} grupoUsuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} grupoUsuario`;
  }
}
