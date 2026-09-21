import Estoque from "../interface/estoque.ts";
import Pedido from "../interface/pedido.ts";

export default class ConsultarEstoqueDoProdutoService {


    public consultarEstoqueDoProduto(pedido: Pedido, estoque: Estoque[]): number {

        const estoqueDoProduto = estoque.find(item => item.codigoInterno === pedido.codigoInterno);

        if (estoqueDoProduto && estoqueDoProduto.quantidadeEmEstoque > 0) {

            return estoqueDoProduto.quantidadeEmEstoque;
        }

        throw new Error('Produto não encontrado no estoque ou quantidade em estoque é zero.');
    };
}
