import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastro/cadastroCliente";
import CadastroPet from "../negocio/cadastro/cadastroPet";
import CadastroProduto from "../negocio/cadastro/cadastroProduto";
import CadastroServico from "../negocio/cadastro/cadastroServico";
import DeletaCliente from "../negocio/deletar/deletarCliente";
import DeletaPet from "../negocio/deletar/deletarPet";
import DeletaProduto from "../negocio/deletar/deletarProduto";
import ListagemClientes from "../negocio/listar/listagemClientes";
import ListagemPets from "../negocio/listar/listagemPets";
import ListagemProdutos from "../negocio/listar/listagemProdutos";
import ListagemServicos from "../negocio/listar/listagemServicos";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`--Clientes--`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Deletar um cliente`);
    console.log(`--Pets--`);
    console.log(`4 - Cadastrar pet`);
    console.log(`5 - Listar todos os pets`);
    console.log(`6 - Deletar um pet`);
    console.log(`--Produto--`);
    console.log(`7 - Cadastrar produto`);
    console.log(`8 - Listar todos os produtos`);
    console.log(`9 - Deletar um produto`);
    console.log(`--Serviço--`);
    console.log(`10 - Cadastrar Serviço`);
    console.log(`11 - Listar todos os serviços`);
    console.log(`12 - Deletar um serviço`)
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
            let cadastroPet = new CadastroPet(empresa.getPets)
            cadastroPet.cadastrar()
            break;
        case 5:
            let listagemPet = new ListagemPets(empresa.getPets)
            listagemPet.listar()
            break;
        case 6:
            let deletaPet = new DeletaPet(empresa.getPets)
            deletaPet.deletar()
            break;
        case 7:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar()
            break;
        case 8:
            let listagemProduto = new ListagemProdutos(empresa.getProdutos)
            listagemProduto.listar()
            break;
        case 9:
            let deletaProduto = new DeletaProduto(empresa.getProdutos)
            deletaProduto.deletar()
            break;
        case 10:
            let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar()
            break;
        case 11:
            let listagemServico = new ListagemServicos(empresa.getServicos)
            listagemServico.listar()
            break;
        case 12:
            let deletaServico = new DeletaProduto(empresa.getServicos)
            deletaServico.deletar()
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Comando inválido, por favor tente novamente.`)
    }
}