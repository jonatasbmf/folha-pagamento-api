import { CreateInssDto } from "../dto/create-inss.dto";

class AliquotaInssMapper {
    static toDto(entity: any): CreateInssDto {
        return {
            id: entity.id,
            ano: entity.ano,
            faixaMin: entity.faixa_min,
            faixaMax: entity.faixa_max,
            aliquota: entity.aliquota,
        };
    }
    static toEntity(dto: CreateInssDto): any {
        return {
            id: dto.id,
            ano: dto.ano,
            faixa_min: dto.faixaMin,
            faixa_max: dto.faixaMax,
            aliquota: dto.aliquota,
        };
    }
}
