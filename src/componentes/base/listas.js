import React, { Component } from "react";
import ListaCliente from "../listas/listaClientes";
import ListaPets from "../listas/listaPets";
import ListaProdutos from "../listas/listaProdutos";
import ListaServico from "../listas/listaServicos";
import "../styles/listasCss.css";

export default class Listas extends Component {
    render() {
        return (
            <div>
                <ListaCliente tema="#e3f2fd"/>
                <ListaPets tema="#e3f2fd"/>
                <ListaProdutos tema="#e3f2fd"/>
                <ListaServico tema="#e3f2fd"/>
            </div>
        );
    }
}
