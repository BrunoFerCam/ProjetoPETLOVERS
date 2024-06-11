import Listagem from "../listar/listagem";
import Produto from "../../modelo/produto";

export default class MaioresConsumosProduto extends Listagem {
    private produto: Array<Produto>
    constructor(produtos: Array<Produto>) {
        super()
        this.produto = produtos
    }
    public listar(): void {
        const OrdProdutos = this.produto.sort((a, b) => b.quantidadeVendasProduto - a.quantidadeVendasProduto).slice(0, 5);
        console.log(`\nLista dos produtos mais consumidos:`);
        for (let i = 0; i<Math.min(5, OrdProdutos.length); i++){
            const produto = OrdProdutos[i]
            console.log(`Nome: ` + produto.nome);
            console.log(`Quantidade total de produtos comprados: ` + produto.quantidadeVendasProduto);
            console.log(`Valor total gasto em produtos: R$${(produto.valor * produto.quantidadeVendasProduto).toFixed(2)}`);
            console.log(`--------------------------------------`);
        };
        console.log(`\n`);
    }
}
