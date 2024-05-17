import CPF from "./cpf"
import Produto from "./produto"
import RG from "./rg"
import Pet from "./pet"
import Telefone from "./telefone"
import Servico from "./servico"


export default class Cliente {
    public nome: string
    public nomeSocial: string
    public cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    private pets: Array<Pet>
    public valorTotalConsumidoProdutos: number
    private quantidadeTotalConsumidaProdutos: number
    constructor(nome: string, nomeSocial: string, cpf: CPF, valorTotalConsumidoProdutos: number, quantidadeTotalConsumidaProdutos: number) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
        this.pets = []
        this.valorTotalConsumidoProdutos = valorTotalConsumidoProdutos
        this.quantidadeTotalConsumidaProdutos = quantidadeTotalConsumidaProdutos
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): string[] {
        return this.produtosConsumidos.map(produto => produto.nome)
    }
    public get getServicosConsumidos(): string[] {
        return this.servicosConsumidos.map(servico => servico.nome)
    }
    public get getPets(): Array<Pet>{
        return this.pets
    }
    public get getValorTotalConsumidoProdutos(): number {
        return this.valorTotalConsumidoProdutos
    }
    public get getQuantidadeTotalConsumidaProdutos(): number {
        return this.quantidadeTotalConsumidaProdutos
    }
    public VendaProduto(produto: Produto, quantidadeProduto: number): void {
        if (!this.produtosConsumidos.includes(produto)) {
            this.produtosConsumidos.push(produto);
        }
        this.quantidadeTotalConsumidaProdutos = this.quantidadeTotalConsumidaProdutos + quantidadeProduto
        this.valorTotalConsumidoProdutos = this.valorTotalConsumidoProdutos + (produto.valor * quantidadeProduto) 
        produto.adicionarVenda(quantidadeProduto);
    }
    public VendaServico(servico: Servico, quantidadeServico: number): void{
        if(!this.servicosConsumidos.includes(servico)) {
            this.servicosConsumidos.push(servico);
        }
    }
}