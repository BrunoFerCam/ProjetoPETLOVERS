import { Component } from "react";
import TopVendasClienteUnidades from "../rankings/topVendasClienteUnidades";
import TopVendasClienteValor from "../rankings/topVendasClienteValor";
import TopVendasProduto from "../rankings/topVendasProduto";
import TopVendasServico from "../rankings/topVendasServico";
import "../styles/rankingsCss.css";


type Props = {
    tema: string;
};

export default class Rankings extends Component<Props> {
    render() {
        const { tema } = this.props;
        return (
            <div>
            <TopVendasClienteUnidades tema="#e3f2fd"/>
            <TopVendasClienteValor tema="#e3f2fd"/>
            <TopVendasProduto tema="#e3f2fd"/>
            <TopVendasServico tema="#e3f2fd"/>
            </div>
        );
    }
}