import { Injectable } from '@nestjs/common';
import { ValidaSenhaUsuarioUseCase } from 'src/usuario/userCase/validaSenhaUsuario.usecase';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class AutenticacaoService {
    constructor(private readonly usuario: UsuarioService,
        private readonly validaSenhaUsuario: ValidaSenhaUsuarioUseCase) { }

    async login(email: string, senha: string): Promise<string> {
        var usuario = await this.usuario.findForEmail(email);

        if ((usuario == null || usuario == undefined) || !this.validaSenhaUsuario.execute(senha, usuario.senha))
            throw "E-mail ou senha inválido!"


        return "token";
    }
}
