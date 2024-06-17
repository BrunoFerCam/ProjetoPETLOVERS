import React from "react";
import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import Listas from "./base/listas";
import Cadastros from "./base/cadastros";
import Atualizar from "./base/atualizar";
import Rankings from "./base/rankings";
import Vendas from "./base/vendas";

class Roteador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tela: "Cadastros",
        };
        this.selecionarView = this.selecionarView.bind(this);
    }

    selecionarView(novaTela, evento) {
        evento.preventDefault();
        console.log(novaTela);
        this.setState({
            tela: novaTela,
        });
    }

    render() {
        let barraNavegacao = (
            <BarraNavegacao
                seletorView={this.selecionarView}
                botoes={["Cadastros", "Atualizar", "Listas", "Rankings", "Vendas"]}
                className="barraNavegacao"
            />
        );

        if (this.state.tela === "Cadastros") {
            return (
                <>
                    {barraNavegacao}
                    <Cadastros tema="#e3f2fd"/>
                </>
            );
        } else if (this.state.tela === "Atualizar") {
            return (
                <>
                    {barraNavegacao}
                    <Atualizar tema="#e3f2fd"/>
                </>
            );
        } else if (this.state.tela === "Listas") {
            return (
                <>
                    {barraNavegacao}
                    <Listas tema="#e3f2fd"/>
                </>
            );
        } else if (this.state.tela === "Rankings") {
            return (
                <>
                    {barraNavegacao}
                    <Rankings tema="#e3f2fd"/>
                </>
            );
        } else if (this.state.tela === "Vendas") {
            return (
                <>
                    {barraNavegacao}
                    <Vendas tema="#e3f2fd"/>
                </>
            );
        } else {
            return null;
        }
    }
}

export default Roteador;
