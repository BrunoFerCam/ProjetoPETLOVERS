/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type Props = {
    tema: string;
};

export default class TopVendasProduto extends Component<Props> {
    render() {
        const { tema } = this.props;
        return (
            <div className="container-fluid">
                <div className="list-group">
                    {[
                        { name: "Product 1", sales: 100 },
                        { name: "Product 2", sales: 80 },
                        { name: "Product 3", sales: 60 },
                        { name: "Product 4", sales: 40 },
                        { name: "Product 5", sales: 20 }
                    ].map((product, index) => (
                        <a key={index} href="#" className="list-group-item">
                            <span className="badge">{product.sales}</span>
                            {product.name}
                        </a>
                    ))}
                </div>
            </div>
        );
    }
}