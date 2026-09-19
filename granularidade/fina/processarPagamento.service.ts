import Pedido from "../interface/pedido.ts";
import CalcularTotalService from "./calcularTotal.service.ts";

export default class ProcessarPagamentoService {


    constructor(private calcularTotalService: CalcularTotalService) {

    }



    public processarPagamento(pedido: Pedido): void {

        const valorTotal = this.calcularTotalService.calcularTotal(pedido.quantidade, pedido.valor);

        console.log('Pagamento processado com sucesso. Valor total: ' + valorTotal);
    };
}
