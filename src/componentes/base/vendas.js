import React, { Component } from "react";
import VendaProdutos from "../vendas/vendaProdutos";
import VendaServicos from "../vendas/vendaServicos";

export default class Vendas extends Component {
    render() {
        return (
            <div>
                <VendaProdutos tema="#e3f2fd"/>
                <VendaServicos tema="#e3f2fd"/>
            </div>
        );
    }
}
