import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Deleta from "./deletar";

export default class DeletaCliente extends Deleta {
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        super()
        this.entrada = new Entrada
        this.clientes = clientes
    }

    public deletar(){
        let cpfCliente = this.entrada.entTexto("Digite o CPF do cliente que deseja deletar: ")
        const index = this.clientes.findIndex(cliente => cliente.getCpf.getValor === cpfCliente)
        if (index !== -1){
            this.clientes.splice(index, 1)
            console.log("Cliente deletado com sucesso!")
        } else {
            console.log("Cliente não encontrado!")
        }
    }
}