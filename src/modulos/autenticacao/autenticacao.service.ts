import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ValidaSenhaUsuarioUseCase } from '../usuario/userCase/validaSenhaUsuario.usecase';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class AutenticacaoService {
  constructor(
    private readonly usuario: UsuarioService,
    private readonly validaSenhaUsuario: ValidaSenhaUsuarioUseCase,
    private readonly jwtService: JwtService,
  ) {}

  async login(email: string, senha: string) {
    interface UsuarioPayload {
      sub: string;
      nomeUsuario: string;
    }

    var usuario = await this.usuario.findForEmail(email);

    if (
      usuario == null ||
      usuario == undefined ||
      !this.validaSenhaUsuario.execute(senha, usuario.senha)
    )
      throw 'E-mail ou senha inválido!';

    const payload: UsuarioPayload = {
      sub: usuario.email,
      nomeUsuario: usuario.name,
    };

    return {
      auth_token: await this.jwtService.signAsync(payload),
    };
  }
}
