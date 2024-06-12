        import React from "react";
        import { Component } from "react";
        import BarraNavegacao from "./barraNavegacao";
        import ListaCliente from "./listas/listaClientes";
        import ListaPets from "./listas/listapets";
        import CatalogoProdutos from "./listas/catalogoprodutos";
        import CatalogoServicos from "./listas/catalogoservicos";

        type state = {
            tela: string;
        };

        export default class Roteador extends Component<{}, state> {
            constructor(props: {} | Readonly<{}>) {
                super(props);
                this.state = {
                    tela: "Clientes",
                };
                this.selecionarView = this.selecionarView.bind(this);
            }

            selecionarView(novaTela: string, evento: Event) {
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
                        botoes={["Clientes", "Pets", "Produtos", "Serviços"]}
                        className="barraNavegacao"
                    />
                );

                if (this.state.tela === "Clientes") {
                    return (
                        <>
                            {barraNavegacao}
                            <ListaCliente tema="#e3f2fd" />
                        </>
                    );
                } else if (this.state.tela === "Pets") {
                    return (
                        <>
                            {barraNavegacao}
                            <ListaPets tema="#e3f2fd" />
                        </>
                    );
                } else if (this.state.tela === "Produtos") {
                    return (
                        <>
                            {barraNavegacao}
                            <CatalogoProdutos tema="#e3f2fd" />
                        </>
                    );
                } else if (this.state.tela === "Serviços") {
                    return (
                        <>
                            {barraNavegacao}
                            <CatalogoServicos tema="#e3f2fd" />
                        </>
                    );
                } else {
                    return null;
                }
            }
        }