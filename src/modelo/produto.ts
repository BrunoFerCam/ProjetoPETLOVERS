export default class Produto {
    public nome: string
    public tipo: string
    public valor: number
    public quantidadeVendas: number
    public valorVendas: number

    constructor(nome: string, tipo: string, quantidadeVendas: number, valorvendas: number, valor: number) {
        this.nome = nome
        this.tipo = tipo
        this.quantidadeVendas = quantidadeVendas
        this.valorVendas = valorvendas
        this.valor = valor
    }
    public get getNome(){return this.nome}
    public get getTipo(){return this.tipo}
    public get getValor(){return this.valor}
    public get getQuantidadeVendas(): number{return this.quantidadeVendas}
    public get getValorVendas(): number{return this.valorVendas}
    public adicionarVenda(quantidade: number): void {
        this.quantidadeVendas += quantidade;
        this.valorVendas = this.valorVendas + quantidade * this.valor;
    }
}