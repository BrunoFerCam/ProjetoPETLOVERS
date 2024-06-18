export default class Produto {
    public nome: string
    public tipo: string
    public valor: number
    public quantidadeVendasProduto: number
    public valorVendasProduto: number

    constructor(nome: string, tipo: string, valor: number, quantidadeVendasProduto: number, valorvendasProduto: number) {
        this.nome = nome
        this.tipo = tipo
        this.valor = valor
        this.quantidadeVendasProduto = quantidadeVendasProduto
        this.valorVendasProduto = valorvendasProduto
    }
    public get getNome(){return this.nome}
    public get getTipo(){return this.tipo}
    public get getValor(){return this.valor}
    public get getQuantidadeVendas(): number{return this.quantidadeVendasProduto}
    public get getValorVendas(): number{return this.valorVendasProduto}
    public adicionarVenda(quantidade: number): void {
        this.quantidadeVendasProduto += quantidade;
        this.valorVendasProduto = this.valorVendasProduto + quantidade * this.valor;
    }
}