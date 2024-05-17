import Entrada from "../../io/entrada"
import Servico from "../../modelo/servico"
import Cadastro from "./cadastro"

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do servico`);
        let nome = this.entrada.entTexto(`Por favor informe o nome do serviço: `)
        let tipo = this.entrada.entTexto(`Por favor informe o tipo do serviço: `)
        let valor = this.entrada.entTexto(`Por favor informe o valor do serviço: `);
        let servico = new Servico(nome, tipo, valor);
        this.servicos.push(servico)
        console.log(`\nCadastro concluído.\n`);
    }
}