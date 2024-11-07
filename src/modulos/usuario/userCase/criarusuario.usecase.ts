import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';
import { Usuario } from '../entities/usuario.entity';
import { UsuarioRepositorio } from '../usuario.repositorio';

@Injectable()
export class CreateUsuarioUseCase {
  constructor(private readonly usuarioRepositorio: UsuarioRepositorio) { }

  async execute(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createUsuarioDto.senha, salt);
    const novoUsuario = { ...createUsuarioDto, salt, senha: hashedPassword }

    return this.usuarioRepositorio.create(novoUsuario);
  }
}
