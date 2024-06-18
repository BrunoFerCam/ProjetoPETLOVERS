import Servico from "../../modelo/servico";
import Deleta from "./deletar";
import Entrada from "../../io/entrada";

export default class DeletaServico extends Deleta {
    private servicos: Array<Servico>;
    private entrada: Entrada;

    constructor(servicos: Array<Servico>) {
        super();
        this.entrada = new Entrada();
        this.servicos = servicos;
    }

    public deletar() {
        let nomeServico = this.entrada.entTexto("Digite o nome do serviço que deseja deletar: ");
        const index = this.servicos.findIndex(servico => servico.getNome === nomeServico);
        if (index !== -1) {
            this.servicos.splice(index, 1);
            console.log("Serviço deletado com sucesso!");
        } else {
            console.log("Serviço não encontrado!");
        }
    }
}
