/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type Props = {
    tema: string;
    vendas: number[];
};

export default class TopVendasProduto extends Component<Props> {
    render() {
        const { tema, vendas } = this.props;
        return (
            <div className="container-fluid">
                <div className="list-group">
                    {vendas.map((venda, index) => (
                        <a href="#" className="list-group-item list-group-item-action" key={index}>
                            Produto {index + 1} - Vendas: {venda}
                        </a>
                    ))}
                </div>
            </div>
        );
    }
}