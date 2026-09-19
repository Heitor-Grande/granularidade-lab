import VerificarUsuarioAtivoService from "./verificarUsuarioAtivo.service.ts";
import ValidarEstoqueService from "./validarEstoque.service.ts";
import ProcessarPagamentoService from "./processarPagamento.service.ts";
import EnviarEmailDeConfirmacaoDoPedidoService from "./enviarEmailDeConfirmacaoDoPedido.service.ts";
import ConsultarEstoqueGeralService from "./consultarEstoqueGeral.service.ts";
import ConsultarEstoqueDoProdutoService from "./consultarEstoqueDoProduto.service.ts";
import Pedido from "../interface/pedido.ts";
import Usuario from "../interface/usuario.ts";


export default class PedidoService {

    constructor(
        private verificarUsuarioAtivo: VerificarUsuarioAtivoService,
        private validarEstoque: ValidarEstoqueService,
        private processarPagamento: ProcessarPagamentoService,
        private enviarEmailDeConfirmacaoDoPedido: EnviarEmailDeConfirmacaoDoPedidoService,
        private consultarEstoqueGeral: ConsultarEstoqueGeralService,
        private consultarEstoqueDoProduto: ConsultarEstoqueDoProdutoService,
    ) { }

    public criarPedido(pedido: Pedido, usuario: Usuario): boolean {
        try {

            this.verificarUsuarioAtivo.verificarUsuarioAtivo(usuario);

            const estoqueGeral = this.consultarEstoqueGeral.consultarEstoqueGeral();

            const estoqueDoProduto = this.consultarEstoqueDoProduto.consultarEstoqueDoProduto(pedido, estoqueGeral);

            this.validarEstoque.validarEstoque(pedido.quantidade, estoqueDoProduto);

            this.processarPagamento.processarPagamento(pedido);

            try {

                this.enviarEmailDeConfirmacaoDoPedido.enviarEmailDeConfirmacaoDoPedido(usuario.email);
            } catch (error) {

                console.error('Pedido criado, mas não foi possível enviar o email de confirmação.', error);
            }

            return true;
        } catch (error) {

            throw new Error('Erro inesperado ao criar o pedido. ' + error);
        }
    };
}
