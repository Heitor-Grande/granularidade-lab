import Estoque from "../interface/estoque.ts";

export default class ConsultarEstoqueGeralService {

    public consultarEstoqueGeral(): Estoque[] {

        return [
            { codigoInterno: 'ABC123', quantidadeEmEstoque: 10 },
            { codigoInterno: 'DEF456', quantidadeEmEstoque: 5 },
            { codigoInterno: 'GHI789', quantidadeEmEstoque: 0 }
        ];
    };
}
