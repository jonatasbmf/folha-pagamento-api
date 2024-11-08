import { Exclude } from "class-transformer";
import { GrupoUsuario } from "src/modulos/grupo-usuario/entities/grupo-usuario.entity";

export class Usuario {
  id?: number;
  email: string;
  nome: string;
  grupoUsuarioId?: number;
  grupoUsuario?: GrupoUsuario;

  @Exclude()
  senha: string;

  @Exclude()
  salt: string;
}
