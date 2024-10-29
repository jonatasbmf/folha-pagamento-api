import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { AutenticacaoService } from './autenticacao.service';
import { AutenticacaoDTO } from './dto/autenticacaoDto';

@Controller('autenticacao')
export class AutenticacaoController {
  constructor(private readonly autenticacaoService: AutenticacaoService) { }

  @Post('login')
  async autentica(@Body() { email, senha }: AutenticacaoDTO) {
    try {
      const result = await this.autenticacaoService.login(email, senha);
      return {
        statusCode: HttpStatus.OK,
        message: 'Login successful',
        data: result,
      };
    } catch (error) {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'E-mail ou senha inválidos!',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
