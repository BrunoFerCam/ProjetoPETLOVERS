export default class Produto {
    public nome: string
    public tipo: string
    public valor: string

    constructor(nome: string, tipo: string, valor: string) {
        this.nome = nome
        this.tipo = tipo
        this.valor = valor
    }
    public get getNome(): string {return this.nome}
    public get getTipo(): string {return this.tipo}
    public get getValor(): string {return this.valor}
}