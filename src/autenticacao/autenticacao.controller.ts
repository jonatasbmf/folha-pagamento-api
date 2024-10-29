import { Body, Controller, Post } from '@nestjs/common';
import { AutenticacaoService } from './autenticacao.service';
import { AutenticacaoDTO } from './dto/autenticacaoDto';

@Controller('autenticacao')
export class AutenticacaoController {
  constructor(private readonly autenticacaoService: AutenticacaoService) { }

  @Post('login')
  async autentica(@Body() { email, senha }: AutenticacaoDTO): Promise<string> {
    return await this.autenticacaoService.login(email, senha);
  }
}
