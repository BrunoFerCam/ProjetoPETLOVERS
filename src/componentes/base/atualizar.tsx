import { Component } from "react";
import FormularioAtualizarCliente from "../atualizar/atualizarClientes";
import FormularioAtualizarPet from "../atualizar/atualizarPets";
import FormularioAtualizarProduto from "../atualizar/atualizarProdutos";
import FormularioAtualizarServicos from "../atualizar/atualizarServicos";

type Props = {
    tema: string;
};

export default class Atualizar extends Component<Props> {
    render() {
        const { tema } = this.props;
        return (
            <div>
                <FormularioAtualizarCliente tema="#e3f2fd"/>
                <FormularioAtualizarPet tema="#e3f2fd"/>
                <FormularioAtualizarProduto tema="#e3f2fd"/>
                <FormularioAtualizarServicos tema="#e3f2fd"/>
            </div>
        );
    }
}