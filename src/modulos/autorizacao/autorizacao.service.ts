import { Injectable } from '@nestjs/common';
import { AutorizacaoRepositorio } from './autorizacao.repositorio';

@Injectable()
export class AutorizacaoServise {
    constructor(private readonly autorizacaoRepositorio: AutorizacaoRepositorio) { }

    async usarioPossuiPermissao(email: string, permissao: string): Promise<boolean> {
        const resposta = this.autorizacaoRepositorio.usarioPossuiPermissao(email, permissao);
        return resposta;
    }
}
