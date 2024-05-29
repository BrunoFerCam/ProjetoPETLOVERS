import Cliente from "../modelo/cliente";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import CPF from "../modelo/cpf";
import Cadastro from "../negocio/cadastro/cadastro";

export default class ExemplosCliente extends Cadastro {
    private clientes: Array<Cliente>


    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes

    }
    public cadastrar(): void {
        let nome = 'Joana Matos';
        let nomeSocial = '';
        let valor = '12345678910';
        let data = '31/01/1990';
        let cpf = new CPF(valor, new Date(1990, 0, 31));
        let rgs: RG[] = [];
        let rg = new RG('2424276867886', new Date(2010, 0, 15));
        rgs.push(rg);
        let telefone = new Telefone('13', '24247586786');
        let genero: 'Feminino' | 'Masculino' = 'Feminino';
        let quantidadeConsumidos = 10;
        let valorConsumidos = 5;
        let telefones: Telefone[] = [];
        telefones.push(telefone);
        let cliente = new Cliente(nome, nomeSocial, cpf, genero, quantidadeConsumidos, valorConsumidos);
        this.clientes.push(cliente);
        telefones.pop();
        rgs.pop();
    }
}