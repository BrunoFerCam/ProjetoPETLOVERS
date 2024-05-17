import Listagem from "../listar/listagem";
import Cliente from "../../modelo/cliente";

export default class MaioresConsumidoresQuantidade extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        const OrdClientes = this.clientes.sort((a, b) => b.getQuantidadeTotalConsumidaProdutos - a.getQuantidadeTotalConsumidaProdutos)
        console.log(`\nLista dos maiores consumidores por quantidade:`);
        for (let i = 0; i<Math.min(10, OrdClientes.length); i++){
            const cliente = OrdClientes[i]
            console.log(`Nome: ` + cliente.nome);
            console.log(`Quantidade total de produtos comprados: ` + cliente.getProdutosConsumidos);
            console.log(`--------------------------------------`);
        };
        console.log(`\n`);
    }
}