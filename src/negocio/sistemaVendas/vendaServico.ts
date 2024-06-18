import Entrada from "../../io/entrada"
import Servico from "../../modelo/servico"
import Cadastro from "../cadastro/cadastro"
import Cliente from "../../modelo/cliente"

export default class VendaServico extends Cadastro {
    private clientes: Array<Cliente>
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>, servicos: Array<Servico>) {
        super()
        this.clientes = clientes
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    
    public cadastrar(): void {
        let nomeCliente = this.entrada.entTexto(`Por favor, informe o nome do cliente: `)
        const cliente = this.clientes.find(cliente => cliente.nome === nomeCliente)
        if (cliente){
            let nomeServico = this.entrada.entTexto(`Por favor, informe o nome do serviço: `)
            const servico = this.servicos.find(servico => servico.nome === nomeServico)
            if (servico){
                console.log(`\nInício da venda do serviço.`);
                let quantidadeVendidaServico = this.entrada.entNumero(`Por favor, informe a quantidade do serviço vendida: `)
                let valorVendaServico = servico.valor
                cliente.VendaServico(servico, quantidadeVendidaServico, valorVendaServico)
                console.log(`Venda do serviço registrada com sucesso!`)
            } else {
                console.log(`Serviço não encontrado.`)
            }
        } else {
            console.log(`Cliente não encontrado.`)
        }
    }
}
