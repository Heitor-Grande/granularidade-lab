import Usuario from "../interface/usuario.ts";

export default class VerificarUsuarioAtivoService {
    
    public verificarUsuarioAtivo(usuario: Usuario): void {


        if (usuario.cadastroAtivo === false) {

            throw new Error('Usuário não possui cadastro ativo. Pedido não pode ser criado.');
        }
    };
}