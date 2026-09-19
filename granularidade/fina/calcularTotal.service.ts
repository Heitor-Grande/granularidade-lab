export default class CalcularTotalService {

    public calcularTotal(quantidadeSolicitada: number, valorUnitario: number): number {


        if (quantidadeSolicitada <= 0 || valorUnitario <= 0) {

            throw new Error('Quantidade solicitada e valor unitário devem ser maiores que zero.');
        }

        return quantidadeSolicitada * valorUnitario;
    };
}
