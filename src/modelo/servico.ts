export default class Servico {
    public nome: string
    public tipo: string
    public valor: number
    public quantidadeVendasServico: number
    public valorVendasServico: number

    constructor(nome: string, tipo: string, valor: number, quantidadeVendasServico: number, valorVendasServico: number) {
        this.nome = nome
        this.tipo = tipo
        this.valor = valor
        this.quantidadeVendasServico = quantidadeVendasServico
        this.valorVendasServico = valorVendasServico
    }
    public get getNome(){return this.nome}
    public get getTipo(){return this.tipo}
    public get getValor(){return this.valor}
    public get getQuantidadeVendas(): number{return this.quantidadeVendasServico}
    public get getValorVendas(): number{return this.valorVendasServico}
    public adicionarVenda(quantidade: number): void {
        this.quantidadeVendasServico += quantidade;
        this.valorVendasServico = this.valorVendasServico + quantidade * this.valor;
    }
}