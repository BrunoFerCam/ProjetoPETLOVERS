import Entrada from "../../io/entrada"
import Servico from "../../modelo/servico"
import Atualizar from "./atualizar"

export default class AtualizaServico extends Atualizar {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        console.log(`\nInício da atualização do serviço`);
        let nome = this.entrada.entTexto(`Por favor informe o novo nome do serviço: `)
        let tipo = this.entrada.entTexto(`Por favor informe o novo tipo do serviço: `)
        let valor = this.entrada.entNumero(`Por favor informe o novo valor do serviço: `);
        let quantidadeVendas = 0;
        let valorVendas = 0;
        let servico = new Servico(nome, tipo, valor, quantidadeVendas, valorVendas);
        this.servicos[0] = servico;
        console.log(`\nAtualização concluída.\n`);
    }
}
