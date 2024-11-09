import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UpdateUsuarioDto } from '../dto/update-usuario.dto';
import { Usuario } from '../entities/usuario.entity';
import { UsuarioRepositorio } from '../usuario.repositorio';

@Injectable()
export class UpdateUsuarioUseCase {
  constructor(private readonly usuarioRepositorio: UsuarioRepositorio) { }

  async execute(
    id: number,
    updateUsuarioDto: UpdateUsuarioDto,
  ): Promise<Usuario> {

    const data: UpdateUsuarioDto = {
      nome: updateUsuarioDto.nome,
      email: updateUsuarioDto.email,
      grupoUsuarioId: updateUsuarioDto.grupoUsuarioId
    };

    if (updateUsuarioDto.senha) {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(updateUsuarioDto.senha, salt);
      data.senha = hashedPassword;
      data.salt = salt;
    }

    console.info("Objeto montado: ", data);

    return this.usuarioRepositorio.update(id, data);
  }
}
