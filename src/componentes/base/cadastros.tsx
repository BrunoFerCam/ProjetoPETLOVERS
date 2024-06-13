import { Component } from "react";
import FormularioCadastroCliente from "../cadastro/cadastroClientes";
import FormularioCadastroProduto from "../cadastro/cadastroProdutos";
import FormularioCadastroServicos from "../cadastro/cadastroServicos";
import FormularioCadastroPet from "../cadastro/cadastroPets";

type Props = {
    tema: string;
};

export default class Cadastros extends Component<Props> {
    render() {
        const { tema } = this.props;
        return (
            <div>
            <FormularioCadastroCliente tema="#e3f2fd"/>
            <FormularioCadastroPet tema="#e3f2fd"/>
            <FormularioCadastroProduto tema="#e3f2fd"/>
            <FormularioCadastroServicos tema="#e3f2fd"/>
            </div>
        );
    }
}