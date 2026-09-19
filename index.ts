import PedidoServiceGrossa from "./granularidade/grossa/pedido.service.ts";
import PedidoServiceFina from "./granularidade/fina/pedido.service.ts";
import Pedido from "./granularidade/interface/pedido.ts";
import Usuario from "./granularidade/interface/usuario.ts";
import VerificarUsuarioAtivoService from "./granularidade/fina/verificarUsuarioAtivo.service.ts";
import ValidarEstoqueService from "./granularidade/fina/validarEstoque.service.ts";
import ProcessarPagamentoService from "./granularidade/fina/processarPagamento.service.ts";
import EnviarEmailDeConfirmacaoDoPedidoService from "./granularidade/fina/enviarEmailDeConfirmacaoDoPedido.service.ts";
import ConsultarEstoqueGeralService from "./granularidade/fina/consultarEstoqueGeral.service.ts";
import ConsultarEstoqueDoProdutoService from "./granularidade/fina/consultarEstoqueDoProduto.service.ts";
import CalcularTotalService from "./granularidade/fina/calcularTotal.service.ts";


//#region Teste com granularidade grossa
/*const pedidoService = new PedidoService();

const usuario: Usuario = {

    nome: 'João Silva',
    email: 'teste@emai.com',
    cadastroAtivo: true
};

const pedido: Pedido = {

    codigoInterno: 'ABC123',
    quantidade: 2,
    valor: 10.78
}

pedidoService.criarPedido(pedido, usuario);*/
//#endregion

//#region Teste com granularidade fina
const usuario: Usuario = {

    nome: 'João Silva',
    email: 'teste@emai.com',
    cadastroAtivo: true
};

const pedido: Pedido = {

    codigoInterno: 'ABC123',
    quantidade: 2,
    valor: 10.78
}

const verificarUsuarioAtivo = new VerificarUsuarioAtivoService();
const validarEstoque = new ValidarEstoqueService();
const calcularTotal = new CalcularTotalService();
const processarPagamento = new ProcessarPagamentoService(calcularTotal);
const enviarEmailDeConfirmacaoDoPedido = new EnviarEmailDeConfirmacaoDoPedidoService();
const consultarEstoqueGeral = new ConsultarEstoqueGeralService();
const consultarEstoqueDoProduto = new ConsultarEstoqueDoProdutoService();

const pedidoServiceFina = new PedidoServiceFina(
    verificarUsuarioAtivo,
    validarEstoque,
    processarPagamento,
    enviarEmailDeConfirmacaoDoPedido,
    consultarEstoqueGeral,
    consultarEstoqueDoProduto
);

pedidoServiceFina.criarPedido(pedido, usuario);
//#endregion
