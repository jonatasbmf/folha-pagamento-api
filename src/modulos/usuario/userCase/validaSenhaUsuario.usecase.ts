import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ValidaSenhaUsuarioUseCase {
    constructor() { }

    async execute(senhaInformada: string, senha: string): Promise<boolean> {
        try {
            const isMatch = await bcrypt.compare(senhaInformada, senha);
            return isMatch;
        } catch (error) {
            console.error('Erro ao comparar senhas:', error);
            throw new InternalServerErrorException('Erro ao validar a senha do usuário');
        }
    }

}