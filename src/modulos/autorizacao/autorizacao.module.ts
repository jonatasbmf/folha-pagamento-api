import { Module } from '@nestjs/common';
import { AutorizacaoRepositorio } from "./autorizacao.repositorio";
import { AutorizacaoServise } from "./autorizacao.service";

@Module({
    providers: [AutorizacaoRepositorio, AutorizacaoServise],
    imports: [],
    exports: []
})

export class AutorizacaoModule { }