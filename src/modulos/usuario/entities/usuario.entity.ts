import { Exclude } from "class-transformer";

export class Usuario {
  id?: number;
  email: string;
  name: string;

  @Exclude()
  senha: string;

  @Exclude()
  salt: string;
}
