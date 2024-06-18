import { Component } from "react";
import ListaCliente from "../listas/listaClientes";
import ListaPets from "../listas/listaPets";
import ListaProdutos from "../listas/listaProdutos";
import ListaServico from "../listas/listaServicos";
import "../styles/listasCss.css";


type Props = {
    tema: string;
};

export default class Listas extends Component<Props> {
    render() {
        const { tema } = this.props;
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