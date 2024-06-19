import React, { Component, MouseEvent } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listas/listaClientes";
import FormularioCadastrarCliente from "./cadastro/cadastroClientes";
import FormularioCadastrarPet from "./cadastro/cadastroPets";
import FormularioCadastrarProdutos from "./cadastro/cadastroProdutos";
import FormularioCadastrarServicos from "./cadastro/cadastroServicos";
import ListaPet from "./listas/listaPets";
import ListaProduto from "./listas/listaProdutos";
import ListaServico from "./listas/listaServicos";
import RegistrarVendaProduto from "./vendas/vendaProdutos";
import RegistrarVendaServico from "./vendas/vendaServicos";

type State = {
    currentSection: string;
};

export default class Roteador extends Component<{}, State> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            currentSection: 'Listar'  // Default section
        };
        this.handleNavigationClick = this.handleNavigationClick.bind(this);
    }

    handleNavigationClick(section: string, event: MouseEvent) {
        event.preventDefault();
        this.setState({
            currentSection: section
        });
    }

    render() {
        const { currentSection } = this.state;

        return (
            <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
                {/* Main Navigation Bar */}
                <BarraNavegacao
                    seletorView={(section: string, event: MouseEvent) =>
                        this.handleNavigationClick(section, event)
                    }
                    botoes={['Listar', 'Cadastrar', 'Registrar Venda']}
                />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    {/* Conditional Rendering Based on Section */}
                    {currentSection === 'Listar' && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '20px', textAlign: 'center' }}>
                            <ListaCliente tema="#e3f2fd" />
                            <ListaPet tema="#e3f2fd" />
                            <ListaProduto tema="#e3f2fd" />
                            <ListaServico tema="#e3f2fd" />
                        </div>
                    )}
                    {currentSection === 'Cadastrar' && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '20px', textAlign: 'center' }}>
                            <FormularioCadastrarCliente tema="#e3f2fd" />
                            <FormularioCadastrarPet tema="#e3f2fd" />
                            <FormularioCadastrarProdutos tema="#e3f2fd" />
                            <FormularioCadastrarServicos tema="#e3f2fd" />
                        </div>
                    )}
                    {currentSection === 'Registrar Venda' && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '20px', textAlign: 'center' }}>
                            <RegistrarVendaProduto tema="#e3f2fd" />
                            <RegistrarVendaServico tema="#e3f2fd" />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
