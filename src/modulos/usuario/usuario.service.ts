import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { UpdateUsuarioUseCase } from './userCase/atualizausuario.usecase';
import { CreateUsuarioUseCase } from './userCase/criarusuario.usecase';
import { UsuarioRepositorio } from './usuario.repositorio';

@Injectable()
export class UsuarioService {
  constructor(
    private readonly usuarioRepositorio: UsuarioRepositorio,
    private readonly createUsuarioUseCase: CreateUsuarioUseCase,
    private readonly updateUsuarioUseCase: UpdateUsuarioUseCase,
  ) { }

  async create(createUsuarioDto: CreateUsuarioDto) {
    return this.createUsuarioUseCase.execute(createUsuarioDto);
  }

  async findAll(): Promise<Usuario[]> {
    const usuarios = await this.usuarioRepositorio.findAll();
    return usuarios.map(user => plainToClass(Usuario, user));
  }

  async findOne(id: number) {
    const user = this.usuarioRepositorio.findOne(id);
    return plainToClass(Usuario, user);
  }

  async findForEmail(email: string) {
    const user = this.usuarioRepositorio.findForEmail(email);
    return plainToClass(Usuario, user);
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.updateUsuarioUseCase.execute(id, updateUsuarioDto);
  }

  async remove(id: number): Promise<void> {
    await this.usuarioRepositorio.remove(id);
  }

  async listarPorNome(nome: string) {
    const usuarios = await this.usuarioRepositorio.listarPorNome(nome);
    return usuarios.map(user => plainToClass(Usuario, user));
  }
}
