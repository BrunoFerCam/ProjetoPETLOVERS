import { Component } from "react";
import VendaProdutos from "../vendas/vendaProdutos";
import VendaServicos from "../vendas/vendaServicos";

type Props = {
    tema: string;
};

export default class Vendas extends Component<Props> {
    render() {
        const { tema } = this.props;
        return (
            <div>
                <VendaProdutos tema="#e3f2fd"/>
                <VendaServicos tema="#e3f2fd"/>
            </div>
        );
    }
}