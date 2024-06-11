import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import AtualizaCliente from "../negocio/atualizar/atualizaCliente";
import AtualizaPet from "../negocio/atualizar/atualizaPet";
import AtualizaProduto from "../negocio/atualizar/atualizaProduto";
import AtualizaServico from "../negocio/atualizar/atualizaServico";
import CadastroCliente from "../negocio/cadastro/cadastroCliente";
import CadastroPet from "../negocio/cadastro/cadastroPet";
import CadastroProduto from "../negocio/cadastro/cadastroProduto";
import CadastroServico from "../negocio/cadastro/cadastroServico";
import DeletaCliente from "../negocio/deletar/deletarCliente";
import DeletaPet from "../negocio/deletar/deletarPet";
import DeletaProduto from "../negocio/deletar/deletarProduto";
import DeletaServico from "../negocio/deletar/deletarServico";
import ListagemClientes from "../negocio/listar/listagemClientes";
import ListagemPets from "../negocio/listar/listagemPets";
import ListagemProdutos from "../negocio/listar/listagemProdutos";
import ListagemServicos from "../negocio/listar/listagemServicos";
import VendaProduto from "../negocio/sistemaVendas/vendaProduto";
import VendaServico from "../negocio/sistemaVendas/vendaServico";
import MaioresConsumidoresQuantidade from "../negocio/topConsumos/maioresConsumidoresQuantidade";
import MaioresConsumidoresValor from "../negocio/topConsumos/maioresConsumidoresValor";
import MaioresConsumidoresProduto from "../negocio/topConsumos/maioresConsumosProduto";
import MaioresConsumidoresServico from "../negocio/topConsumos/maioresConsumosServico";
import MaioresConsumosPet from "../negocio/topConsumos/produtosPet";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`--Clientes--`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Deletar um cliente`);
    console.log(`4 - Editar um cliente`);
    console.log(`--Pets--`);
    console.log(`5 - Cadastrar pet`);
    console.log(`6 - Listar todos os pets`);
    console.log(`7 - Deletar um pet`);
    console.log(`8 - Editar um pet`);
    console.log(`--Produto--`);
    console.log(`9 - Cadastrar produto`);
    console.log(`10 - Listar todos os produtos`);
    console.log(`11 - Deletar um produto`);
    console.log(`12 - Editar um produto`);
    console.log(`--Serviço--`);
    console.log(`13 - Cadastrar Serviço`);
    console.log(`14 - Listar todos os serviços`);
    console.log(`15 - Deletar um serviço`);
    console.log(`16 - Editar um serviço`);
    console.log(`--Vendas--`);
    console.log(`17 - Vender produto`);
    console.log(`18 - Vender serviço`);
    console.log(`-----------`)
    console.log(`--Maiores Vendas--`);
    console.log(`19 - Top 10 consumidores por quantidade de produtos comprados`)
    console.log(`20 - Top 5 consumidores por valor total gasto em produtos`)
    console.log(`21 - Produtos mais consumidos`)
    console.log(`22 - Serviços mais consumidos`)
    console.log(`23 - Listagem de tipos, raças e gêneros de pets por quantidade`)
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.entNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastroCliente = new CadastroCliente(empresa.getClientes)
            cadastroCliente.cadastrar()
            break;
        case 2:
            let listagemCliente = new ListagemClientes(empresa.getClientes)
            listagemCliente.listar()
            break;
        case 3:
            let deletaCliente = new DeletaCliente(empresa.getClientes)
            deletaCliente.deletar()
            break;
        case 4:
            let atualizaCliente = new AtualizaCliente(empresa.getClientes)
            atualizaCliente.atualizar()
            break;
        case 5:
            let cadastroPet = new CadastroPet(empresa.getPets)
            cadastroPet.cadastrar()
            break;
        case 6:
            let listagemPet = new ListagemPets(empresa.getPets)
            listagemPet.listar()
            break;
        case 7:
            let deletaPet = new DeletaPet(empresa.getPets)
            deletaPet.deletar()
            break;
        case 8:
            let atualizaPet = new AtualizaPet(empresa.getPets)
            atualizaPet.atualizar()
            break;
        case 9:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar()
            break;
        case 10:
            let listagemProduto = new ListagemProdutos(empresa.getProdutos)
            listagemProduto.listar()
            break;
        case 11:
            let deletaProduto = new DeletaProduto(empresa.getProdutos)
            deletaProduto.deletar()
            break;
        case 12:
            let atualizaProduto = new AtualizaProduto(empresa.getProdutos)
            atualizaProduto.atualizar()
            break;
        case 13:
            let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar()
            break;
        case 14:
            let listagemServico = new ListagemServicos(empresa.getServicos)
            listagemServico.listar()
            break;
        case 15:
            let deletaServico = new DeletaServico(empresa.getServicos)
            deletaServico.deletar()
            break;
        case 16:
            let atualizaServico = new AtualizaServico(empresa.getServicos)
            atualizaServico.atualizar()
            break;
        case 17:
            let vendaProduto = new VendaProduto(empresa.getClientes, empresa.getProdutos)
            vendaProduto.cadastrar()
            break;
        case 18:
            let vendaServico = new VendaServico(empresa.getClientes, empresa.getServicos)
            vendaServico.cadastrar()
            break;
        case 19:
            let maioresConsumidoresQuantidade = new MaioresConsumidoresQuantidade(empresa.getClientes)
            maioresConsumidoresQuantidade.listar()
            break;
        case 20:
            let maioresConsumidoresValor = new MaioresConsumidoresValor(empresa.getClientes)
            maioresConsumidoresValor.listar()
            break;
        case 21:
            let MaioresConsumosProduto = new MaioresConsumidoresProduto(empresa.getProdutos)
            MaioresConsumosProduto.listar()
            break;
        case 22:
            let MaioresConsumosServico = new MaioresConsumidoresServico(empresa.getServicos)
            MaioresConsumosServico.listar()
            break;
        case 23:
            let maioresConsumosPet = new MaioresConsumosPet(empresa.getPets)
            maioresConsumosPet.listar()
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Comando inválido, por favor tente novamente.`)
            break;
    }
}
