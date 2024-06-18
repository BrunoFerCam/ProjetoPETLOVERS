import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import CPF from "../../modelo/cpf"
import Atualizar from "./atualizar"

export default class AtualizaCliente extends Atualizar {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        console.log(`\nInício da atualização do cliente`);
        let nome = this.entrada.entTexto(`Por favor informe o novo nome do cliente: `)
        let nomeSocial = this.entrada.entTexto(`Por favor informe o novo nome social do cliente: `)
        let valor = this.entrada.entTexto(`Por favor informe o novo número do cpf: `);
        let data = this.entrada.entTexto(`Por favor informe a nova data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);
        this.clientes[0].nome = nome;
        this.clientes[0].nomeSocial = nomeSocial;
        this.clientes[0].cpf = cpf;
        console.log(`\nAtualização concluída.\n`);
    }
}
