import Pedido from "../interface/pedido.ts";
import Usuario from "../interface/usuario.ts";
import Estoque from "../interface/estoque.ts";

export default class PedidoService {

    public criarPedido(pedido: Pedido, usuario: Usuario): boolean {
        try {

            this.verificarUsuarioAtivo(usuario);

            const estoqueGeral = this.consultarEstoqueGeral();

            const estoqueDoProduto = this.consultarEstoqueDoProduto(pedido, estoqueGeral);

            this.validarEstoque(pedido.quantidade, estoqueDoProduto);

            this.processarPagamento(pedido);

            try {

                this.enviarEmailDeConfirmacaoDoPedido(usuario.email);
            } catch (error) {

                console.error('Pedido criado, mas não foi possível enviar o email de confirmação.', error);
            }

            return true;
        } catch (error) {

            throw new Error('Erro inesperado ao criar o pedido. ' + error);
        }
    };

    private calcularTotal(quantidadeSolicitada: number, valorUnitario: number): number {


        if (quantidadeSolicitada <= 0 || valorUnitario <= 0) {

            throw new Error('Quantidade solicitada e valor unitário devem ser maiores que zero.');
        }

        return quantidadeSolicitada * valorUnitario;
    };

    private consultarEstoqueGeral(): Estoque[] {

        return [
            { codigoInterno: 'ABC123', quantidadeEmEstoque: 10 },
            { codigoInterno: 'DEF456', quantidadeEmEstoque: 5 },
            { codigoInterno: 'GHI789', quantidadeEmEstoque: 0 }
        ];
    };

    private consultarEstoqueDoProduto(pedido: Pedido, estoque: Estoque[]): number {

        const estoqueDoProduto = estoque.find(item => item.codigoInterno === pedido.codigoInterno);

        if (estoqueDoProduto && estoqueDoProduto.quantidadeEmEstoque > 0) {

            return estoqueDoProduto.quantidadeEmEstoque;
        }

        throw new Error('Produto não encontrado no estoque ou quantidade em estoque é zero.');
    };

    private validarEstoque(quantidadeSolicitada: number, quantidadeEmEstoque: number): void {


        if (quantidadeSolicitada > quantidadeEmEstoque) {

            throw new Error('Quantidade solicitada maior que a disponível em estoque.');
        }
    };

    private processarPagamento(pedido: Pedido): void {

        const valorTotal = this.calcularTotal(pedido.quantidade, pedido.valor);

        console.log('Pagamento processado com sucesso. Valor total: ' + valorTotal);
    };

    private enviarEmailDeConfirmacaoDoPedido(emailDoUsuarioComprador: string): void {



        if (emailDoUsuarioComprador) {

            console.log('Email de confirmação do pedido enviado para: ' + emailDoUsuarioComprador);
            return;
        }

        throw new Error('Email do usuário comprador não fornecido. Não é possível enviar o email de confirmação do pedido.');
    };

    private verificarUsuarioAtivo(usuario: Usuario): void {


        if (usuario.cadastroAtivo === false) {

            throw new Error('Usuário não possui cadastro ativo. Pedido não pode ser criado.');
        }
    };
};
