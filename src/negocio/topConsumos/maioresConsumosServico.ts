import Listagem from "../listar/listagem";
import Servico from "../../modelo/servico";

export default class MaioresConsumosServico extends Listagem {
    private servicos: Array<Servico>;
    
    constructor(servicos: Array<Servico>) {
        super();
        this.servicos = servicos;
    }
    
    public listar(): void {
        const ordServicos = this.servicos.sort((a, b) => b.quantidadeVendasServico - a.quantidadeVendasServico).slice(0, 5);
        console.log(`\nLista dos serviços mais consumidos:`);
        
        for (let i = 0; i < Math.min(5, ordServicos.length); i++) {
            const servico = ordServicos[i];
            console.log(`Nome: ${servico.nome}`);
            console.log(`Quantidade total de serviços contratados: ${servico.quantidadeVendasServico}`);
            console.log(`Valor total gasto em serviços: R$${(servico.valor * servico.quantidadeVendasServico).toFixed(2)}`);
            console.log(`--------------------------------------`);
        }
        
        console.log(`\n`);
    }
}
