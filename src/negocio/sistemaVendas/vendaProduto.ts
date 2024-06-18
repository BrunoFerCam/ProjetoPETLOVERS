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
                let valorVendaProduto = 0
                let quantidadeVendidaProduto = 0
                while(quantidadeVendidaProduto <= 0){
                    quantidadeVendidaProduto = this.entrada.entNumero(`Informe a quantidade vendida: `)
                    valorVendaProduto = quantidadeVendidaProduto * produto.getValor
                }
                cliente.VendaProduto(produto, quantidadeVendidaProduto, valorVendaProduto)
                console.log(`Venda registrada com sucesso para ${cliente.nome}.`)
            }
            else{
                console.log(`Falha ao encontrar produto ${produtoNome}`)
            }
        }
        else{
            console.log(`CPF ${valorCpfCliente} não encontrado.`)
        }
    }
}
