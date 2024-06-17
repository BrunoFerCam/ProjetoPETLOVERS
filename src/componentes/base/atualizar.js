import React, { Component } from "react";
import FormularioAtualizarCliente from "../atualizar/atualizarClientes";
import FormularioAtualizarPet from "../atualizar/atualizarPets";
import FormularioAtualizarProduto from "../atualizar/atualizarProdutos";
import FormularioAtualizarServicos from "../atualizar/atualizarServicos";

export default class Atualizar extends Component {
    render() {
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
