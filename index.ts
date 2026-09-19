import PedidoService from "./granularidade/grossa/pedidoService.js";
import Pedido from "./granularidade/interface/pedido.js";
import Usuario from "./granularidade/interface/usuario.js";

const pedidoService = new PedidoService();

const usuario: Usuario = {

    nome: 'João Silva',
    email: 'teste@emai.com',
    cadastroAtivo: false
};

const pedido: Pedido = {

    codigoInterno: 'ABC123',
    quantidade: 2,
    valor: 0
}

//criando o pedido
const pedidoCriado = pedidoService.criarPedido(pedido, usuario);
console.log(pedidoCriado);