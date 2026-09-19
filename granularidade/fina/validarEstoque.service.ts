export default class ValidarEstoqueService {

    public validarEstoque(quantidadeSolicitada: number, quantidadeEmEstoque: number): void {


        if (quantidadeSolicitada > quantidadeEmEstoque) {

            throw new Error('Quantidade solicitada maior que a disponível em estoque.');
        }
    };
}
