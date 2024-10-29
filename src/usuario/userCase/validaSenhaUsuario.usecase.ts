import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ValidaSenhaUsuarioUseCase {
    constructor() { }

    execute(senhaInformada: string, senha: string) {
        try {
            const isMatch = bcrypt.compare(senhaInformada, senha);
            return isMatch;
        } catch (error) {
            console.error('Erro ao comparar senhas:', error);
            throw new InternalServerErrorException('Erro ao validar a senha do usuário');
        }
    }
}