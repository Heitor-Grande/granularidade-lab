export default class EnviarEmailDeConfirmacaoDoPedidoService {

    public enviarEmailDeConfirmacaoDoPedido(emailDoUsuarioComprador: string): void {



        if (emailDoUsuarioComprador) {

            console.log('Email de confirmação do pedido enviado para: ' + emailDoUsuarioComprador);
            return;
        }

        throw new Error('Email do usuário comprador não fornecido. Não é possível enviar o email de confirmação do pedido.');
    };
}
