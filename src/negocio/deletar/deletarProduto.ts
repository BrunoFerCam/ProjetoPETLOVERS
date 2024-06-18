import Produto from "../../modelo/produto";
import Deleta from "./deletar";
import Entrada from "../../io/entrada";

export default class DeletaProduto extends Deleta {
    private produtos: Array<Produto>;
    private entrada: Entrada;

    constructor(produtos: Array<Produto>) {
        super();
        this.entrada = new Entrada();
        this.produtos = produtos;
    }

    public deletar() {
        let nomeProduto = this.entrada.entTexto("Digite o nome do produto que deseja deletar: ");
        const index = this.produtos.findIndex(produto => produto.getNome === nomeProduto);
        if (index !== -1) {
            this.produtos.splice(index, 1);
            console.log("Produto deletado com sucesso!");
        } else {
            console.log("Produto não encontrado!");
        }
    }
}
