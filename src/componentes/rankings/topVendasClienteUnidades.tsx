/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type Props = {
    tema: string;
};

export default class TopVendasClienteUnidades extends Component<Props> {
    render() {
        const { tema } = this.props;
        return (
            <div className="container-fluid">
                <div className="list-group">
                {[
                        { name: "Cliente 1", sales: 100 },
                        { name: "Cliente 2", sales: 80 },
                        { name: "Cliente 3", sales: 60 },
                        { name: "Cliente 4", sales: 40 },
                        { name: "Cliente 5", sales: 20 }
                    ].map((Cliente, index) => (
                        <a key={index} href="#" className="list-group-item">
                            <span className="badge">{Cliente.sales}</span>
                            {Cliente.name}
                        </a>
                    ))}
                </div>
            </div>
        );
    }
}