import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ValidaSenhaUsuarioUseCase {
    constructor() { }

    async execute(senhaInformada: string, senha: string, salt: string): Promise<boolean> {
        const hashedPassword = await bcrypt.hash(senhaInformada, salt);

        if (senha === hashedPassword)
            return true;

        return false;
    }
}