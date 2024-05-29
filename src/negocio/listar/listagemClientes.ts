import Cliente from "../../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`--------------------------------------`);
            console.log(`Total de compras de produtos: ` + cliente.getQuantidadeTotalConsumidaProdutos);
            console.log(`Valor total gasto em produtos: R$` + cliente.getValorTotalConsumidoProdutos);
            console.log(`Total de serviços contratados: ` + cliente.quantidadeTotalConsumidaServicos);
            console.log(`Valor total gasto em serviços: R$` + cliente.valorTotalConsumidoServicos);
            console.log(`Valor total gasto: R$` + cliente.valorTotalConsumido);	
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}