import Listagem from "../listar/listagem";
import Cliente from "../../modelo/cliente";

export default class MaioresConsumidoresValor extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        const OrdClientes = this.clientes.sort((a, b) => b.getValorTotalConsumidoProdutos - a.getValorTotalConsumidoProdutos).slice(0, 5);
        console.log(`\nLista dos maiores consumidores por valor:`);
        for (let i = 0; i<Math.min(5, OrdClientes.length); i++){
            const cliente = OrdClientes[i]
            console.log(`Nome: ` + cliente.nome);
            console.log(`Quantidade total de produtos comprados: ` + cliente.getQuantidadeTotalConsumidaProdutos);
            console.log(`Valor total gasto em produtos: R$` + cliente.getValorTotalConsumidoProdutos.toFixed(2));
            console.log(`Produtos consumidos: ` + cliente.getProdutosConsumidos);
            console.log(`--------------------------------------`);
        };
        console.log(`\n`);
    }
}