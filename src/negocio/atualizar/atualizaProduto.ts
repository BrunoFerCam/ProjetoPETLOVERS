import Entrada from "../../io/entrada"
import Produto from "../../modelo/produto"
import Atualizar from "./atualizar"

export default class AtualizaProduto extends Atualizar {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        console.log(`\nInício da atualização do produto`);
        let nome = this.entrada.entTexto(`Por favor informe o novo nome do produto: `)
        let categoria = this.entrada.entTexto(`Por favor informe a nova categoria do produto: `)
        let preco = this.entrada.entNumero(`Por favor informe o novo preço do produto: `);
        let valorVendas = 0; 
        let quantidadeVendas = 0; 
        let produto = new Produto(nome, categoria, quantidadeVendas, valorVendas, preco); 
        this.produtos[0] = produto;
        console.log(`\nAtualização concluída.\n`);
    }
}
