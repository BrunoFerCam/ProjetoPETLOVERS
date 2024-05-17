import Entrada from "../../io/entrada"
import Produto from "../../modelo/produto"
import Cadastro from "../cadastro/cadastro"
import Cliente from "../../modelo/cliente"

export default class vendaProduto extends Cadastro {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>, produtos: Array<Produto>) {
        super()
        this.clientes = clientes
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        let valorCpfCliente = this.entrada.entTexto(`Informe o CPF do cliente: `)
        const cliente = this.clientes.find(cliente => cliente.getCpf.getValor === valorCpfCliente)
        if (cliente){
            let produtoNome = this.entrada.entTexto(`Informe o nome do produto vendido: `)
            const produto = this.produtos.find(produto=>produto.nome === produtoNome)

            if(produto){
                let quantidadeVendida = 0
                while(quantidadeVendida <= 0){
                    quantidadeVendida = this.entrada.entNumero(`Informe a quantidade vendida: `)
                }
                cliente.VendaProduto(produto, quantidadeVendida)
                console.log(`Venda registrada com sucesso para ${cliente.nome}.`)
            }
            else{
                console.log(`Falha ao encontrar produto ${produtoNome}`)
            }
        }
        else{
            console.log(`CPF ${valorCpfCliente} não encontrado!`)
        }
    }
}
